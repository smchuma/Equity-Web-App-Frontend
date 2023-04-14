import React, { createContext } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useRefreshToken from "../../hooks/useRefresh";
import SkeletonLoadingComponent from "../../Components/Loader/SkeletonLoadingComponent";

const UserContext = createContext();

export const UserContextProvider = ({ children, fetchUser = true }) => {
  const { state } = useAuth();
  const { userId } = state;
  const refreshAccessToken = useRefreshToken();

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery(
    "user",
    async () => {
      const accessToken = await refreshAccessToken();
      const { data } = await axios.get(
        `https://equity-backend.bravewave-974a5699.westus2.azurecontainerapps.io/user/${userId}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      return data;
    },
    {
      enabled: fetchUser && !!state.accessToken,
      onSuccess: () => {},
      onError: (error) => {
        if (error.response?.status === 403 || error.response?.status === 401) {
          console.log("Token expired");
          refreshAccessToken();
        }
      },
    }
  );
  const { data: allUsers } = useQuery("Allusers", async () => {
    const accessToken = await refreshAccessToken();
    const { data } = await axios.get(
      `https://equity-backend.bravewave-974a5699.westus2.azurecontainerapps.io/user/`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );
    return data;
  });

  if (isLoading) return <SkeletonLoadingComponent />;
  if (isError) {
    return <div>Error fetching user data</div>;
  }

  return (
    <UserContext.Provider
      value={{
        user,
        allUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
