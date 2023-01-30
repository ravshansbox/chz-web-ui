import { createSlice } from '@reduxjs/toolkit';
import { createAccessToken, fetchAccessToken } from './api';

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  username: null as string | null,
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
    builder.addCase(fetchAccessToken.fulfilled, (state, { payload }) => {
      state.isAuthenticating = false;
      state.isAuthenticated = true;
      state.username = payload.user.username;
    });
    builder.addCase(fetchAccessToken.rejected, (state) => {
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
