import { createContext, useReducer } from "react";

const initialState = {
  accessToken: null,
  userId: null,
  persist: JSON.parse(localStorage.getItem("persist")) || false,
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
    case "setPersist":
      return { ...state, persist: !state.persist };
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
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

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
