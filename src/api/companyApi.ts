import { httpClient } from '../common/httpClient';

type Company = {
  id: string;
  name: string;
};

export const fetchCompanies = () => {
  return httpClient.fetch<Company[]>('/companies');
};

export const createCompany = (body: { name: string }) => {
  return httpClient.fetch<Company>('/companies', { method: 'POST', body });
};
