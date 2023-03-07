import { ComponentType, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchCompanies } from '../api/companyApi';
import { AppState, useAppDispatch } from '../store';
import { Card } from './core/Card';
import { List } from './core/List';
import { NavLink } from './core/NavLink';

export const Companies: ComponentType = () => {
  const companies = useSelector((state: AppState) => state.companies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCompanies());
  }, []);

  return (
    <Card title="Companies">
      <List>
        <NavLink to="new">New</NavLink>
      </List>
      <pre>{JSON.stringify(companies, null, 2)}</pre>
    </Card>
  );
};
