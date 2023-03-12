import {
  createContext,
  useContext,
  useState,
  type ComponentType,
  type PropsWithChildren,
} from 'react';
import { type Company } from './types';

type AppStoreValue = {
  selectedCompany: Company | null;
};
type MergeState = (value: Partial<AppStoreValue>) => void;
type AppContextMethods = {
  mergeState: MergeState;
};
type AppStore = AppStoreValue & AppContextMethods;

const AppStoreContext = createContext({} as AppStore);

export const AppStoreProvider: ComponentType<PropsWithChildren> = ({ children }) => {
  const [value, setValue] = useState({ selectedCompany: null } as AppStore);

  const mergeState: MergeState = (newValue) => {
    setValue((oldValue) => ({ ...oldValue, ...newValue }));
  };

  return (
    <AppStoreContext.Provider value={{ ...value, mergeState }}>{children}</AppStoreContext.Provider>
  );
};

export const useAppStore = () => useContext(AppStoreContext);
