import { createContext, useState, useContext, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

interface UserContextType {
    user:any;
    setUser: (user:any)=>void;
}

const defaultValue: UserContextType = {
    user: null,
    setUser: () => {},
  };

const UserContext = createContext<UserContextType>(defaultValue);

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<any>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
