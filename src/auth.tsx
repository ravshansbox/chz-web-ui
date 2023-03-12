import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ComponentType,
  type PropsWithChildren,
} from 'react';
import {
  createAccessToken,
  deleteAccessToken,
  restoreAccessToken,
  type Credentials,
  type User,
} from './api/authApi';

type ContextValue = { isFetching: boolean; user: User | null };

type Authenticate = (credentials: Credentials) => Promise<void>;

type Logout = () => Promise<void>;

type ContextMethods = { authenticate: Authenticate; logout: Logout };

const AuthContext = createContext({} as ContextValue & ContextMethods);

export const AuthProvider: ComponentType<PropsWithChildren> = ({ children }) => {
  const [value, setValue] = useState<ContextValue>({
    isFetching: true,
    user: null,
  });

  useEffect(() => {
    (async () => {
      try {
        const accessToken = await restoreAccessToken();
        if (accessToken !== null) {
          setValue((value) => ({ ...value, user: accessToken.user }));
        }
      } finally {
        setValue((value) => ({ ...value, isFetching: false }));
      }
    })();
  }, []);

  const authenticate: Authenticate = async (credentials) => {
    try {
      setValue((value) => ({ ...value, isFetching: true }));
      const accessToken = await createAccessToken(credentials);
      setValue((value) => ({ ...value, user: accessToken.user }));
    } finally {
      setValue((value) => ({ ...value, isFetching: false }));
    }
  };

  const logout: Logout = async () => {
    try {
      await deleteAccessToken();
    } finally {
      setValue((value) => ({ ...value, user: null }));
    }
  };

  return (
    <AuthContext.Provider value={{ ...value, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
