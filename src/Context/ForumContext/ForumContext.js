import { useReducer } from "react";
import { createContext } from "react";
// import useApi from "../../hooks/useApi";

export const ForumContext = createContext();
export const ForumReducer = (state, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return { ...state, posts: action.payload };
    case "ADD_POST":
      return { ...state, posts: [...state.posts, action.payload] };
    case "UPDATE_POST":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case "UPDATE_LIKES":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case "ADD_COMMENT":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case "DELETE_COMMENT":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };

    default:
      return state;
  }
};
export const ForumContextProvider = ({ children }) => {
  // const { getPost, error, updateLikes, isLoading, isError } = useApi();
  const [state, dispatch] = useReducer(ForumReducer, {
    posts: null,
  });

  // const fetchPost = () => {
  //   try {
  //     // const { data } = getPost;

  //     dispatch({ type: "GET_POSTS", payload: data });
  //     console.log("response", data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // if (isLoading) return <div>Loading...</div>;
  // if (isError) {
  //   return <div>Error fetching user data</div>;
  // }

  return (
    <ForumContext.Provider
      value={{
        state,
        dispatch,
        // fetchPost,
      }}
    >
      {children}
    </ForumContext.Provider>
  );
};
