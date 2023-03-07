import { createAsyncThunk } from '@reduxjs/toolkit';
import { ACCESS_TOKEN_ID_KEY, API_BASE_URL, HEADERS } from '../constants';
import { fetchJson } from '../utils/fetchJson';
import { httpClient } from '../utils/httpClient';
import { HttpError } from '../utils/HttpError';

export const restoreAccessToken = createAsyncThunk('restoreAccessToken', async () => {
  const accessTokenId = window.localStorage.getItem(ACCESS_TOKEN_ID_KEY);
  if (!accessTokenId) {
    return;
  }
  try {
    const accessTokenPromise = fetchJson(`${API_BASE_URL}/access-tokens/${accessTokenId}`);
    httpClient.setWaitPromise(accessTokenPromise);
    const accessToken = await accessTokenPromise;
    httpClient.setHeader(HEADERS.AUTHORIZATION, `Bearer ${accessToken.id}`);
    return accessToken;
  } catch (error) {
    if (error instanceof HttpError && error.statusCode === 404) {
      window.localStorage.removeItem(ACCESS_TOKEN_ID_KEY);
    }
    throw error;
  }
});

type CreateAccessTokenBody = {
  username: string;
  password: string;
};
export const createAccessToken = createAsyncThunk(
  'createAccessToken',
  async (body: CreateAccessTokenBody) => {
    const accessTokenPromise = fetchJson(`${API_BASE_URL}/access-tokens`, { method: 'POST', body });
    httpClient.setWaitPromise(accessTokenPromise);
    const accessToken = await accessTokenPromise;
    httpClient.setHeader(HEADERS.AUTHORIZATION, `Bearer ${accessToken.id}`);
    window.localStorage.setItem(ACCESS_TOKEN_ID_KEY, accessToken.id);
    return accessToken;
  },
);
