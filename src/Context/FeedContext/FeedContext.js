import { createContext, useReducer } from "react";
import { useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import useRefreshToken from "../../hooks/useRefresh";

const baseUrl = "https://equity-backend.happyground-0da80d3a.westus2.azurecontainerapps.io";
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
    case "LIKE_FEED":
      const updatedFeeds = state.feeds.map((feed) =>
        feed._id === action.payload.postId
          ? { ...feed, likes: [...feed.likes, action.payload.userId] }
          : feed
      );
      return {
        ...state,
        feeds: updatedFeeds,
      };
    case "COMMENT_FEED":
      const commentFeed = state.feeds.map((feed) =>
        feed._id === action.payload.postId
          ? {
              ...feed,
              comments: [
                ...feed.comments,
                {
                  text: action.payload.comment,
                  user: {
                    firstName: action.payload.user.firstName,
                    lastName: action.payload.user.lastName,
                    image: action.payload.user.image,
                  },
                },
              ],
            }
          : feed
      );
      return {
        ...state,
        posts: commentFeed,
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

  const deleteFeed = useMutation(
    async (postId) => {
      const accessToken = await refreshAccessToken();
      const response = await fetch(`${baseUrl}/${endpointPath}/${postId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.json();
    },
    {
      onSuccess: async (deletedFeed) => {
        console.log("Post deleted successfully");
        await refetch();
      },
      onError: (err) => {
        console.log("Error deleting post");
      },
      // staleTime: 60000,
    }
  );
  const likeFeed = useMutation(
    async ({ postId, userId }) => {
      const accessToken = await refreshAccessToken();
      const response = await fetch(
        `${baseUrl}/${endpointPath}/${postId}/like`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ userId }),
        }
      );
      return response.json();
    },
    {
      onSuccess: async (likedFeed) => {
        console.log("Feed liked successfully");
        console.log(likedFeed);
        await refetch();
      },
      onError: (err) => {
        console.log("Error liking post");
      },
      staleTime: 60000,
    }
  );
  const commentFeed = useMutation(
    async ({ postId, comment }) => {
      const accessToken = await refreshAccessToken();
      const response = await fetch(
        `${baseUrl}/${endpointPath}/${postId}/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ comment }),
        }
      );
      return response.json();
    },
    {
      onSuccess: async (addedComment) => {
        console.log("Comment added successfully");
        console.log(addedComment);
        await refetch();
      },
      onError: (err) => {
        console.log("Error adding comment");
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
        deleteFeed,
        likeFeed,
        commentFeed,
      }}
    >
      {children}
    </FeedContext.Provider>
  );
};

export default FeedContext;
