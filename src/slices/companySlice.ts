import { createSlice } from '@reduxjs/toolkit';
import { fetchCompanies } from '../api/companyApi';

const initialState = {
  isFetching: false,
  list: null as any[] | null,
  error: null as string | null,
};

export const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(fetchCompanies.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.list = payload;
    });
    builder.addCase(fetchCompanies.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload as string;
    });
  },
});
