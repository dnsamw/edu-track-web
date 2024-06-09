import { Dispatch, createContext, useEffect, useReducer } from "react";
import AuthReducer, { AuthAction, AuthState } from "./AuthReducer";

const initialState: AuthState = {
  currentUser: JSON.parse(localStorage.getItem("user") !== "undefined" ? localStorage.getItem("user") ?? "null" : "null") || null
};

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(()=>{
    localStorage.setItem('user',JSON.stringify(state.currentUser))
  },[state.currentUser]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
