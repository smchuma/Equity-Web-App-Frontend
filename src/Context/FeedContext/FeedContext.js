import { createContext, useReducer } from "react";
import { useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import useRefreshToken from "../../hooks/useRefresh";

const baseUrl = "http://localhost:3500";
const endpointPath = "announcements";

const FeedContext = createContext();

export const FeedReducer = (state, action) => {
  switch (action.type) {
    case "GET_FEEDS":
      return {
        ...state,
        feeds: action.payload,
      };
    case "CREATE_FEED":
      return {
        ...state,
        feeds: [action.payload, ...state.feeds],
      };
    case "DELETE_FEED":
      return {
        feeds: state.feeds.filter((feed) => feed._id !== action.payload),
      };

    default:
      return state;
  }
};

export const FeedContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FeedReducer, {
    feeds: null,
  });

  const refreshAccessToken = useRefreshToken();

  const {
    isLoading,
    data: feeds,
    refetch,
    error,
  } = useQuery(
    "feedData",
    async () => {
      const accessToken = await refreshAccessToken();
      const feedResponse = await fetch(`${baseUrl}/${endpointPath}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const feedData = await feedResponse.json();

      const userIds = feedData.map((feed) => feed.userId);

      const userResponse = await fetch(
        `${baseUrl}/user?id=${userIds.join(
          ","
        )}&fields=firstName,lastName,image`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const userData = await userResponse.json();

      const data = feedData.map((feed) => {
        const user = userData.find((user) => user._id === feed.userId);
        return {
          ...feed,
          user: {
            firstName: user.firstName,
            lastName: user.lastName,
          },
        };
      });
      return data;
    },
    {
      staleTime: Infinity, // Cache the data for a long time
    }
  );
  if (error) {
    console.log("An error occurred while fetching data:", error);
  }

  const postFeed = useMutation(
    async (data) => {
      const accessToken = await refreshAccessToken();
      const response = await fetch(`${baseUrl}/${endpointPath}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      });

      return response.json();
    },
    {
      onSuccess: async (newFeed) => {
        console.log("Feed created successfully");
        const accessToken = await refreshAccessToken();
        const userId = newFeed.userId;
        const userResponse = await fetch(`${baseUrl}/user/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const userData = await userResponse.json();

        // Combine the new post and user data into a single object
        const feedDataWithUser = {
          ...newFeed,
          user: {
            firstName: userData.firstName,
            lastName: userData.lastName,
          },
        };

        // Dispatch the action with the new post and user data
        dispatch({
          type: "CREATE_POST",
          payload: feedDataWithUser,
        });
        await refetch();
      },
      onError: (err) => {
        console.log("Error creating post");
      },
      staleTime: 60000,
    }
  );

  useEffect(() => {
    if (feeds) {
      dispatch({ type: "GET_FEEDS", payload: feeds });
    }
  }, [dispatch, feeds]);

  return (
    <FeedContext.Provider
      value={{
        ...state,
        dispatch,
        isLoading,
        postFeed,
      }}
    >
      {children}
    </FeedContext.Provider>
  );
};

export default FeedContext;
