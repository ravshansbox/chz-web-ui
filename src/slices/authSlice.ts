import { createSlice } from '@reduxjs/toolkit';
import { createAccessToken, restoreAccessToken } from '../api/authApi';

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  username: null as string | null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(restoreAccessToken.pending, (state) => {
      state.isAuthenticating = true;
    });
    builder.addCase(restoreAccessToken.fulfilled, (state, { payload }) => {
      state.isAuthenticating = false;
      state.isAuthenticated = true;
      state.username = payload.user.username;
    });
    builder.addCase(restoreAccessToken.rejected, (state) => {
      state.isAuthenticating = false;
      state.isAuthenticated = false;
    });
    builder.addCase(createAccessToken.pending, (state) => {
      state.isAuthenticating = true;
    });
    builder.addCase(createAccessToken.fulfilled, (state, { payload }) => {
      state.isAuthenticating = false;
      state.isAuthenticated = true;
      state.username = payload.user.username;
    });
    builder.addCase(createAccessToken.rejected, (state) => {
      state.isAuthenticating = false;
      state.isAuthenticated = false;
    });
  },
});
