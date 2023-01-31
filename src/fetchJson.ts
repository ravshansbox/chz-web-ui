import { HttpError } from './HttpError';

const isResponseOk = (response: Response) => {
  return response.status >= 200 && response.status <= 299;
};

type RequestInitJson = Omit<RequestInit, 'body'> & {
  body?: any;
};

export const fetchJson = async (input: string, { body, ...init }: RequestInitJson = {}) => {
  const response = await fetch(input, {
    ...init,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!isResponseOk(response)) {
    throw new HttpError(`HTTP Status code ${response.status}`, response.status);
  }
  if (response.headers.get('Content-Type') !== 'application/json') {
    throw new Error('Response is not in JSON format');
  }
  return response.json();
};
