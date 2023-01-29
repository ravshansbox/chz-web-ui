import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
};

export const {
  name: authSliceName,
  actions: authActions,
  reducer: authReducer,
} = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuthenticated = payload;
      state.isAuthenticating = false;
    },
    setIsAuthenticating: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuthenticated = false;
      state.isAuthenticating = payload;
    },
  },
});
