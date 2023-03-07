import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpClient } from '../utils/httpClient';

export const fetchUsers = createAsyncThunk('fetchUsers', () => {
  return httpClient.fetch('/users');
});
