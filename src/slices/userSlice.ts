import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../api/userApi';

const initialState = {
  isFetching: false,
  list: null as any[] | null,
  error: null as string | null,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.list = payload;
    });
    builder.addCase(fetchUsers.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload as string;
    });
  },
});
