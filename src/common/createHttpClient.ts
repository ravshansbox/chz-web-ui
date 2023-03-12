import { fetchJson, type FetchJsonParams } from './fetchJson';

export const createHttpClient = (baseUrl: string) => {
  const defaultHeaders: HeadersInit = {};

  const setHeader = (name: string, value: string) => {
    defaultHeaders[name] = value;
  };

  const removeHeader = (key: string) => {
    delete defaultHeaders[key];
  };

  const fetch = async <T>(url: string, { headers, ...params }: FetchJsonParams = {}) => {
    return fetchJson<T>(`${baseUrl}${url}`, {
      ...params,
      headers: { ...defaultHeaders, ...headers },
    });
  };

  return {
    setHeader,
    removeHeader,
    fetch,
  };
};
