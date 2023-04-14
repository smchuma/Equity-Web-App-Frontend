import { createContext, useReducer } from "react";
import { useQuery, useMutation } from "react-query";
import useRefreshToken from "../../hooks/useRefresh";
import { BASEURL } from "../../API_URL/api";
import { useEffect } from "react";

const endpointPath = "posts";

const ForumContext = createContext();

export const ForumReducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "CREATE_POST":
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case "DELETE_POST":
      return {
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case "LIKE_POST":
      const updatedPosts = state.posts.map((post) =>
        post._id === action.payload.postId
          ? { ...post, likes: [...post.likes, action.payload.userId] }
          : post
      );
      return {
        ...state,
        posts: updatedPosts,
      };
    case "ADD_COMMENT":
      const addComment = state.posts.map((post) =>
        post._id === action.payload.postId
          ? {
              ...post,
              comments: [
                ...post.comments,
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
          : post
      );
      return {
        ...state,
        posts: addComment,
      };

    default:
      return state;
  }
};

export const ForumContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ForumReducer, {
    posts: null,
  });
  const refreshAccessToken = useRefreshToken();

  const {
    isLoading,
    data: posts,
    refetch,
  } = useQuery(
    "postData",
    async () => {
      const accessToken = await refreshAccessToken();
      const postResponse = await fetch(`${BASEURL}/${endpointPath}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const postData = await postResponse.json();

      const userIds = postData.map((post) => post.userId);

      const userResponse = await fetch(
        `${BASEURL}/user?id=${userIds.join(
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

      const data = postData.map((post) => {
        const user = userData.find((user) => user._id === post.userId);
        return {
          ...post,
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

  const postData = useMutation(
    async (data) => {
      const accessToken = await refreshAccessToken();
      const response = await fetch(`${BASEURL}/${endpointPath}`, {
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
      onSuccess: async (newPost) => {
        console.log("Post created successfully");
        const accessToken = await refreshAccessToken();
        const userId = newPost.userId;
        const userResponse = await fetch(`${BASEURL}/user/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const userData = await userResponse.json();

        // Combine the new post and user data into a single object
        const postDataWithUser = {
          ...newPost,
          user: {
            firstName: userData.firstName,
            lastName: userData.lastName,
          },
        };

        // Dispatch the action with the new post and user data
        dispatch({
          type: "CREATE_POST",
          payload: postDataWithUser,
        });
        refetch();
      },
      onError: (err) => {
        console.log("Error creating post");
      },
      staleTime: 60000,
    }
  );

  const deletePost = useMutation(
    async (postId) => {
      const accessToken = await refreshAccessToken();
      const response = await fetch(`${BASEURL}/${endpointPath}/${postId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.json();
    },
    {
      onSuccess: async (deletedPost) => {
        await refetch();
      },
      onError: (err) => {
        console.log("Error deleting post");
      },
      // staleTime: 60000,
    }
  );
  const likePost = useMutation(
    async ({ postId, userId }) => {
      const accessToken = await refreshAccessToken();
      const response = await fetch(
        `${BASEURL}/${endpointPath}/${postId}/like`,
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
      onSuccess: async (likedPost) => {
        await refetch();
      },
      onError: (err) => {
        console.log("Error liking post");
      },
      staleTime: 60000,
    }
  );

  const addComment = useMutation(
    async ({ postId, comment }) => {
      const accessToken = await refreshAccessToken();
      const response = await fetch(
        `${BASEURL}/${endpointPath}/${postId}/comment`,
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
        await refetch();
      },
      onError: (err) => {
        console.log("Error adding comment");
      },
      staleTime: 60000,
    }
  );

  useEffect(() => {
    if (posts) {
      dispatch({ type: "SET_POSTS", payload: posts });
    }
  }, [dispatch, posts]);

  return (
    <ForumContext.Provider
      value={{
        ...state,
        dispatch,
        isLoading,
        postData,
        deletePost,
        likePost,
        addComment,
      }}
    >
      {children}
    </ForumContext.Provider>
  );
};
export default ForumContext;
