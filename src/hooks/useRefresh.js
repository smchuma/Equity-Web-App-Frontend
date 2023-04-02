import axios from "axios";
import useAuth from "../hooks/useAuth";

const useRefreshToken = () => {
  const { dispatch } = useAuth();

  const refresh = async () => {
    const response = await axios.get("http://localhost:3500/refresh", {
      withCredentials: true,
    });
    dispatch((prev) => {
      console.log(JSON.stringify(prev));
      console.log(response?.data?.accessToken);
      return {
        ...prev,
        accessToken: response?.data?.accessToken,
      };
    });
    return response?.data?.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
