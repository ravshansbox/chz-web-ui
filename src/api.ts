import { createAsyncThunk } from '@reduxjs/toolkit';
import { ACCESS_TOKEN_ID_KEY, API_BASE_URL } from './constants';
import { fetchJson } from './fetchJson';
import { HttpError } from './HttpError';

export const fetchAccessToken = createAsyncThunk(
  'fetchAccessToken',
  async (accessTokenId: string) => {
    try {
      const result = await fetchJson(`${API_BASE_URL}/access-tokens/${accessTokenId}`);
      return result;
    } catch (error) {
      if (error instanceof HttpError && error.statusCode === 404) {
        window.localStorage.removeItem(ACCESS_TOKEN_ID_KEY);
      }
      throw error;
    }
  },
);

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
