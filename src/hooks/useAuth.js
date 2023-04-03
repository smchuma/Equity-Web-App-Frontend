import { useContext } from "react";
import { AuthContext } from "../Context/Auth/AuthContextProvider";
import { useDebugValue } from "react";

const useAuth = () => {
  const { state, login, logout, register, dispatch } = useContext(AuthContext);
  useDebugValue(state, (state) =>
    state?.accessToken ? "Logged In" : "Logged Out"
  );

  return { login, logout, state, register, dispatch };
};

export default useAuth;
