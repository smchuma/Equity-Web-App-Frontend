import { useContext } from "react";
import UserContext from "../Context/UserContext/UserContext";

const useUser = () => {
  const { user, setUser, isLoading, error } = useContext(UserContext);
  return { user, setUser, isLoading, error };
};

export default useUser;
