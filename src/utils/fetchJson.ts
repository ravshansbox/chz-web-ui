import { CONTENT_TYPES, HEADERS } from '../constants';
import { HttpError } from './HttpError';

const isResponseOk = (response: Response) => {
  return response.status >= 200 && response.status <= 299;
};

export type FetchJsonParams = Omit<RequestInit, 'body'> & {
  body?: any;
};

export const fetchJson = async <T>(
  url: string,
  { headers, body, ...init }: FetchJsonParams = {},
) => {
  const response = await fetch(url, {
    ...init,
    headers: { ...headers, [HEADERS.CONTENT_TYPE]: CONTENT_TYPES.JSON },
    body: JSON.stringify(body),
  });
  if (!isResponseOk(response)) {
    throw new HttpError(`HTTP Status code ${response.status}`, response.status);
  }
  if (response.headers.get(HEADERS.CONTENT_TYPE) !== CONTENT_TYPES.JSON) {
    throw new Error('Response is not in JSON format');
  }
  return response.json() as T;
};
