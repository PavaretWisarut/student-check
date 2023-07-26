import React, { createContext, useState } from "react";

export type UserContextType = {
  user: any;
  setUser: any;
};

type UserContextProviderType = {
  children: React.ReactNode;
};
export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderType) => {
  const [user, setUser] = useState(false);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
