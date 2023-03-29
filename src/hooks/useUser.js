import { useContext } from "react";
import UserContext from "../Context/UserContext/UserContext";

const useUser = () => {
  return useContext(UserContext);
};

export default useUser;
