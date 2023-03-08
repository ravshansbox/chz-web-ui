import { ComponentType, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useOutlet } from 'react-router-dom';
import { fetchCompanies } from '../../api/companyApi';
import { AppState, useAppDispatch } from '../../store';
import { Card } from '../core/Card';
import { List } from '../core/List';
import { NavLink } from '../core/NavLink';
import { Table, TableBodyCell, TableHeadCell } from '../core/Table';

export const Companies: ComponentType = () => {
  const outlet = useOutlet();
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
      {outlet ||
        (companies.list && (
          <Table>
            <thead>
              <tr>
                <TableHeadCell>ID</TableHeadCell>
                <TableHeadCell>Name</TableHeadCell>
              </tr>
            </thead>
            <tbody>
              {companies.list.map((company) => (
                <tr key={company.id}>
                  <TableBodyCell>{company.id}</TableBodyCell>
                  <TableBodyCell>{company.name}</TableBodyCell>
                </tr>
              ))}
            </tbody>
          </Table>
        ))}
    </Card>
  );
};
