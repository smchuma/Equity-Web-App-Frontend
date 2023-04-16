import { useContext } from "react";
import { AuthContext } from "../Context/Auth/AuthContextProvider";

const useAuth = () => {
  const { state, login, logout, register, dispatch } = useContext(AuthContext);
  const { userId } = state;

  return { login, logout, state, register, dispatch, userId };
};

export default useAuth;
