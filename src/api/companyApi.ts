import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpClient } from '../utils/httpClient';

export const fetchCompanies = createAsyncThunk('fetchCompanies', () => {
  return httpClient.fetch('/companies');
});
