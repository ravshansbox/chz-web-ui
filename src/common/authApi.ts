import { ACCESS_TOKEN_ID_KEY, HEADERS } from './constants';
import { httpClient } from './httpClient';
import { HttpError } from './HttpError';
import { type AccessToken, type Credentials } from './types';

export const restoreAccessToken = async () => {
  const accessTokenId = window.localStorage.getItem(ACCESS_TOKEN_ID_KEY);
  if (!accessTokenId) {
    return null;
  }
  try {
    const accessToken = await httpClient.fetch<AccessToken>(`/access-tokens/${accessTokenId}`);
    httpClient.setHeader(HEADERS.AUTHORIZATION, `Bearer ${accessToken.id}`);
    return accessToken;
  } catch (error) {
    if (error instanceof HttpError && error.statusCode === 404) {
      window.localStorage.removeItem(ACCESS_TOKEN_ID_KEY);
    }
    return null;
  }
};

export const createAccessToken = async (body: Credentials) => {
  const accessToken = await httpClient.fetch<AccessToken>('/access-tokens', {
    method: 'POST',
    body,
  });
  httpClient.setHeader(HEADERS.AUTHORIZATION, `Bearer ${accessToken.id}`);
  window.localStorage.setItem(ACCESS_TOKEN_ID_KEY, accessToken.id);
  return accessToken;
};

export const deleteAccessToken = async () => {
  await httpClient.fetch<AccessToken>('/access-tokens', { method: 'DELETE' });
  httpClient.removeHeader(HEADERS.AUTHORIZATION);
  window.localStorage.removeItem(ACCESS_TOKEN_ID_KEY);
};
