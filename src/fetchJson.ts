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
    throw new Error(`HTTP Status code ${response.status}`);
  }
  if (response.headers.get('Content-Type') === 'application/json') {
    return response.json();
  }
  throw new Error('Response is not in JSON format');
};
