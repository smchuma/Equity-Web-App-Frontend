import { useContext } from "react";
import ForumContext from "../Context/ForumContext/ForumContext";

const useApi = () => {
  const { posts, isLoading, postData, deletePost, likePost, addComment } =
    useContext(ForumContext);

  return { posts, isLoading, deletePost, likePost, addComment, postData };
};

export default useApi;
