import { createContext, useContext } from 'react';

type AuthContext = {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
};

export const authContext = createContext<AuthContext>({
  isAuthenticated: false,
  isAuthenticating: false,
});

export const useAuth = () => useContext(authContext);
