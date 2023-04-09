import React, { createContext } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useRefreshToken from "../../hooks/useRefresh";

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
      const { data } = await axios.get(`http://localhost:3500/user/${userId}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      return data;
    },
    {
      enabled: fetchUser && !!state.accessToken,
      onSuccess: () => {
        console.log("User data fetched");
      },
      onError: (error) => {
        if (error.response?.status === 403 || error.response?.status === 401) {
          console.log("Token expired");
          refreshAccessToken();
        }
      },
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    return <div>Error fetching user data</div>;
  }

  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
