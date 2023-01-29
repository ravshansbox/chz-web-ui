import { createSlice } from '@reduxjs/toolkit';
import { createAccessToken, fetchAccessToken } from './api';

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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAccessToken.pending, (state) => {
      state.isAuthenticating = true;
    });
    builder.addCase(fetchAccessToken.fulfilled, (state) => {
      state.isAuthenticating = false;
      state.isAuthenticated = true;
    });
    builder.addCase(fetchAccessToken.rejected, (state) => {
      state.isAuthenticating = false;
      state.isAuthenticated = false;
    });
    builder.addCase(createAccessToken.pending, (state) => {
      state.isAuthenticating = true;
    });
    builder.addCase(createAccessToken.fulfilled, (state) => {
      state.isAuthenticating = false;
      state.isAuthenticated = true;
    });
    builder.addCase(createAccessToken.rejected, (state) => {
      state.isAuthenticating = false;
      state.isAuthenticated = false;
    });
  },
});
