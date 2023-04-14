import { useContext } from "react";
import UserContext from "../Context/UserContext/UserContext";

const useUser = () => {
  const { user, allUsers, setUser, isLoading, error } = useContext(UserContext);
  return { user, allUsers, setUser, isLoading, error };
};

export default useUser;
