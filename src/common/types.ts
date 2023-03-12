export type User = {
  id: string;
  username: string;
  is_root: boolean;
};

export type AccessToken = {
  id: string;
  user_id: string;
  user: User;
};

export type Company = {
  id: string;
  name: string;
};

export type Credentials = {
  username: string;
  password: string;
};
