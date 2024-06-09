import { ReducerAction } from "react";

type AuthUser = {
  providerId: string;
  proactiveRefresh: string;
  reloadUserInfo: string;
  reloadListener: string;
  uid: string;
  auth: string;
  stsTokenManager: string;
  accessToken: string;
  displayName: string;
  email: string;
  emailVerified: string;
  phoneNumber: string;
  photoURL: string;
  isAnonymous: string;
  tenantId: string;
  providerData: string;
  metadata: string;
};

export const AUTH_ACTIONS = {
  LOGIN:'login',
  LOGOUT:'logout',
}

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
