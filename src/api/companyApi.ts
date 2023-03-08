import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpClient } from '../utils/httpClient';

export const fetchCompanies = createAsyncThunk('fetchCompanies', () => {
  return httpClient.fetch('/companies');
});

type CreateCompanyBody = {
  name: string;
};
export const createCompany = createAsyncThunk('createCompany', (body: CreateCompanyBody) => {
  return httpClient.fetch('/companies', { method: 'POST', body });
});
