import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { signOut } from './api/authApi';
import { authSlice } from './slices/authSlice';
import { companySlice } from './slices/companySlice';
import { userSlice } from './slices/userSlice';

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [companySlice.name]: companySlice.reducer,
  [userSlice.name]: userSlice.reducer,
});

const reducer: typeof rootReducer = (state, action) => {
  return rootReducer(action.type === signOut.fulfilled.type ? undefined : state, action);
};

export const store = configureStore({ reducer });

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
