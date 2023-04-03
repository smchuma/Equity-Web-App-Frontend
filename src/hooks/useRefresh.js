import axios from "axios";
import useAuth from "../hooks/useAuth";

const useRefreshToken = () => {
  const { dispatch } = useAuth();

  const refresh = async () => {
    const response = await axios.get("http://localhost:3500/refresh", {
      withCredentials: true,
    });
    // const accessToken = response?.data?.accessToken;
    dispatch((prev) => {
      return {
        ...prev,
        accessToken: response?.data?.accessToken,
      };
    });
    // localStorage.setItem("accessToken", accessToken);
    return response?.data?.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
