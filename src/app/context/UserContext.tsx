import { createContext, useState, useContext, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export type AuthUser = {
  email:string;
  email_verified:string;
  family_name:string;
  given_name:string;
  locale:string;
  picture:string;
  sub:string;
}

interface UserContextType {
    user:any;
    setUser: (user:AuthUser)=>void;
}

const defaultValue: UserContextType = {
    user: null,
    setUser: () => {},
  };

const UserContext = createContext<UserContextType>(defaultValue);

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
