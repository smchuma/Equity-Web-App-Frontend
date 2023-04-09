import { useContext } from "react";
import { AuthContext } from "../Context/Auth/AuthContextProvider";

const useAuth = () => {
  const { state, login, logout, register, dispatch } = useContext(AuthContext);

  return { login, logout, state, register, dispatch };
};

export default useAuth;
