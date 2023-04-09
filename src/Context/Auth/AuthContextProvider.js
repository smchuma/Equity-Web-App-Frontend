import { createContext, useReducer, useEffect } from "react";
import Cookies from "js-cookie";

const initialState = {
  accessToken: Cookies.get("accessToken") || null,
  userId: Cookies.get("userId") || null,
};

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        accessToken: action.payload.accessToken,
        userId: action.payload.userId,
      };

    case "LOGOUT":
      return {
        ...state,
        accessToken: null,
        userId: null,
      };
    default:
      return state;
  }
};

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const login = (accessToken, userId) => {
    dispatch({
      type: "LOGIN",
      payload: { accessToken, userId },
    });
    Cookies.set("accessToken", accessToken, {
      secure: true,
      sameSite: "strict",
    });
    Cookies.set("userId", userId, { secure: true, sameSite: "strict" });
  };

  const logout = async () => {
    try {
      await fetch("http://localhost:3500/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error(error);
    }
    dispatch({ type: "LOGOUT" });
    Cookies.remove("accessToken");
    Cookies.remove("userId");
  };

  useEffect(() => {
    if (state.accessToken) {
      Cookies.set("accessToken", state.accessToken, {
        secure: true,
        sameSite: "strict",
      });
      Cookies.set("userId", state.userId, { secure: true, sameSite: "strict" });
    }
  }, [state]);

  return (
    <AuthContext.Provider
      value={{
        state,
        login,
        logout,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
