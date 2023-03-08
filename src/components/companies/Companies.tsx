import { ComponentType, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchCompanies } from '../../api/companyApi';
import { AppState, useAppDispatch } from '../../store';
import { Card } from '../core/Card';
import { List } from '../core/List';
import { NavLink } from '../core/NavLink';
import { Table, TableBodyCell, TableHeadCell } from '../core/Table';

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
      <Table>
        <thead>
          <tr>
            <TableHeadCell>ID</TableHeadCell>
            <TableHeadCell>Name</TableHeadCell>
          </tr>
        </thead>
        <tbody>
          {companies.companies?.map((company) => (
            <tr>
              <TableBodyCell>{company.id}</TableBodyCell>
              <TableBodyCell>{company.name}</TableBodyCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};
