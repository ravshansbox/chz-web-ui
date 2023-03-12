import { type ComponentType } from 'react';
import { useQuery } from 'react-query';
import { useOutlet } from 'react-router-dom';
import { httpClient } from '../../common/httpClient';
import { type Company } from '../../common/types';
import { Card } from '../core/Card';
import { List } from '../core/List';
import { NavLink } from '../core/NavLink';
import { Table, TableBodyCell, TableHeadCell } from '../core/Table';

export const Companies: ComponentType = () => {
  const outlet = useOutlet();
  const companies = useQuery({
    queryKey: ['companies'],
    queryFn: () => httpClient.fetch<Company[]>('/companies'),
  });

  return (
    <Card title="Companies">
      <List>
        <NavLink to="new">New</NavLink>
      </List>
      {outlet ??
        (companies.data && (
          <Table>
            <thead>
              <tr>
                <TableHeadCell>ID</TableHeadCell>
                <TableHeadCell>Name</TableHeadCell>
              </tr>
            </thead>
            <tbody>
              {companies.data.map((company) => (
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
