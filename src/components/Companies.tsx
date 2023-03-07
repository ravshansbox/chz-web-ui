import { ComponentType, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchCompanies } from '../api/companyApi';
import { AppState, useAppDispatch } from '../store';
import { Card } from './core/Card';

export const Companies: ComponentType = () => {
  const companies = useSelector((state: AppState) => state.companies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);

  return (
    <Card title="Companies">
      <pre>{JSON.stringify(companies, null, 2)}</pre>
    </Card>
  );
};
