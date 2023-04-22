import { createContext, useReducer, useState } from "react";
import { useQuery, useMutation } from "react-query";
import useRefreshToken from "../../hooks/useRefresh";
import { BASEURL } from "../../API_URL/api";
import PropTypes from "prop-types";
import { useEffect } from "react";
import HorizontalLoader from "../../Components/HorizontalLoader/HorizontalLoader";

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
    case "LIKE_POST": {
      const updatedPosts = state.posts.map((post) =>
        post._id === action.payload.postId
          ? { ...post, likes: [...post.likes, action.payload.userId] }
          : post
      );
      return {
        ...state,
        posts: updatedPosts,
      };
    }

    case "ADD_COMMENT": {
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
    }

    default:
      return state;
  }
};

export const ForumContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ForumReducer, {
    posts: null,
  });
  const [loading, setLoading] = useState(false);
  const refreshAccessToken = useRefreshToken();

  //fetching posts

  const {
    isLoading,
    data: posts,
    refetch,
  } = useQuery(
    "pos",
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
        const comments = post.comments.map((comment) => {
          const commentUser = userData.find(
            (user) => user._id === comment.userId
          );
          return {
            ...comment,
            user: {
              firstName: commentUser.firstName,
              lastName: commentUser.lastName,
              profilePicture: commentUser.profilePicture,
            },
          };
        });
        return {
          ...post,
          comments,
          user: {
            firstName: user.firstName,
            lastName: user.lastName,
            profilePicture: user.profilePicture,
          },
        };
      });
      return data;
    },
    {
      staleTime: Infinity, // Cache the data for a long time
    }
  );

  //posting data

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
        setLoading(false);
      },
      onError: (err) => {
        console.log(err);
        setLoading(false);
      },
      staleTime: 60000,
      onMutate: () => {
        setLoading(true);
      },
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
      onSuccess: async () => {
        await refetch();
        setLoading(false);
      },
      onError: (err) => {
        console.log(err);
        setLoading(false);
      },
      onMutate: () => {
        setLoading(true);
      },
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
      onSuccess: async () => {
        await refetch();
      },
      onError: (err) => {
        console.log(err);
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
      onSuccess: async () => {
        await refetch();
      },
      onError: (err) => {
        console.log(err);
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
      {loading && <HorizontalLoader />}
      {children}
    </ForumContext.Provider>
  );
};
ForumContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ForumContext;
