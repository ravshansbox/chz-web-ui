import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from './constants';
import { fetchJson } from './fetchJson';

export const fetchAccessToken = createAsyncThunk('fetchAccessToken', (accessTokenId: string) => {
  return fetchJson(`${API_BASE_URL}/access-tokens/${accessTokenId}`);
});

type CreateAccessTokenBody = {
  username: string;
  password: string;
};
export const createAccessToken = createAsyncThunk(
  'createAccessToken',
  (body: CreateAccessTokenBody) => {
    return fetchJson(`${API_BASE_URL}/access-tokens`, { method: 'POST', body });
  },
);
