export type Entity<T> = { id: string } & T;

export type NewEntity<T> = Omit<T, 'id'>;

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

export type Customer = Entity<{
  company_id: string;
  name: string;
}>;

export type Product = Entity<{
  company_id: string;
  name: string;
}>;

export type Order = Entity<{
  company_id: string;
  name: string;
}>;

export type Credentials = {
  username: string;
  password: string;
};
