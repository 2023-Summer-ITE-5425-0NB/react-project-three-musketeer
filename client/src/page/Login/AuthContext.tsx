import React, { createContext, useState, ReactNode } from "react";

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  // Add other user data fields as needed
}

export interface AuthContextProps {
  user: User | null;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  token: string | null; // New token property
  setToken: React.Dispatch<React.SetStateAction<string | null>>; // New setToken property
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  setUser: () => {},
  token: null, // Initialize token as null
  setToken: () => {}, // Initialize setToken as an empty function
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null); // Initialize token state

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn, setIsLoggedIn, setUser, token, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
