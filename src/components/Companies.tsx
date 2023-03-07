import { ComponentType, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchCompanies } from '../api/companyApi';
import { AppState, useAppDispatch } from '../store';

export const Companies: ComponentType = () => {
  const companies = useSelector((state: AppState) => state.companies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);

  return (
    <>
      <h1>Companies</h1>
      <pre>{JSON.stringify(companies, null, 2)}</pre>
    </>
  );
};
