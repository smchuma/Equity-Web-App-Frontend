import { useContext } from "react";
import FeedContext from "../Context/FeedContext/FeedContext";

const useFeed = () => {
  const { feeds, isLoading, postFeed } = useContext(FeedContext);

  return { feeds, isLoading, postFeed };
};

export default useFeed;
