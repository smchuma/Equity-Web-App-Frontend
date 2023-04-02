import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
  const { dispatch } = useAuth();

  const logout = async () => {
    dispatch({});
    try {
      await axios("/logout", {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
};

export default useLogout;
