import { httpClient } from '../utils/httpClient';

type User = {
  id: string;
  username: string;
  is_root: boolean;
};
export const fetchUsers = () => {
  return httpClient.fetch<User[]>('/users');
};

export const createUser = (body: { username: string; password: string }) => {
  return httpClient.fetch<User>('/users', { method: 'POST', body });
};
