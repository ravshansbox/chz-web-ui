import { fetchJson, FetchJsonParams } from './fetchJson';

export const createHttpClient = (baseUrl: string) => {
  const defaultHeaders: HeadersInit = {};
  let waitPromise: Promise<unknown> | null;

  const setHeader = (name: string, value: string) => {
    defaultHeaders[name] = value;
  };

  const removeHeader = (key: string) => {
    delete defaultHeaders[key];
  };

  const setWaitPromise = (promise: Promise<unknown>) => {
    waitPromise = promise;
    promise.finally(() => {
      waitPromise = null;
    });
  };

  const fetch = async (url: string, { headers, ...params }: FetchJsonParams = {}) => {
    if (waitPromise) {
      await waitPromise;
    }
    return fetchJson(`${baseUrl}${url}`, { ...params, headers: { ...defaultHeaders, ...headers } });
  };

  return {
    setHeader,
    removeHeader,
    setWaitPromise,
    fetch,
  };
};
