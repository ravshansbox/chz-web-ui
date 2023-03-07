import { createAsyncThunk } from '@reduxjs/toolkit';
import { httpClient } from '../utils/httpClient';

export const fetchUsers = createAsyncThunk('fetchUsers', () => {
  return httpClient.fetch('/users');
});

type CreateUserBody = {
  username: string;
  password: string;
};
export const createUser = createAsyncThunk('createUser', (body: CreateUserBody) => {
  return httpClient.fetch('/users', { method: 'POST', body });
});
