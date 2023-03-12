export type Entity<T> = { id: string } & T;

export type User = Entity<{
  username: string;
  is_root: boolean;
}>;

export type AccessToken = Entity<{
  user_id: string;
  user: User;
}>;

export type Company = Entity<{
  name: string;
}>;

export type Permission = Entity<{
  company_id: string;
  company: Company;
}>;

export type Credentials = {
  username: string;
  password: string;
};
