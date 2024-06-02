import { ReducerAction } from "react";

type AuthUser = {
  id: string;
  username: string;
};

export type AuthState = {
  currentUser: AuthUser | null;
};

export type AuthAction = { type: "login"; payload: AuthUser } | { type: "logout" };

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "login":
      return { currentUser: action.payload };
    case "logout":
      return { currentUser: null };
    default:
      return state;
  }
};

export default AuthReducer;
