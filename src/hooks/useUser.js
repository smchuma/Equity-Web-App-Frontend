import { useContext } from "react";
import UserContext from "../Context/UserContext/UserContext";

const useUser = () => {
  const { user, allUsers, setUser, isLoading, error, allLoading, updateUser } =
    useContext(UserContext);
  return { user, allUsers, setUser, isLoading, error, allLoading, updateUser };
};

export default useUser;
