import { type ComponentType } from 'react';
import { useQuery } from 'react-query';
import { NavLink, useOutlet } from 'react-router-dom';
import { useAppStore } from '../../common/appStore';
import { httpClient } from '../../common/httpClient';
import { type Product } from '../../common/types';
import { Card } from '../core/Card';
import { List } from '../core/List';
import { Table, TableBodyCell, TableHeadCell } from '../core/Table';

export const Products: ComponentType = () => {
  const outlet = useOutlet();
  const appStore = useAppStore();
  const products = useQuery({
    queryKey: ['products', appStore.selectedCompany?.id],
    queryFn: () =>
      httpClient.fetch<Product[]>(`/products?company_id=${appStore.selectedCompany?.id}`),
    enabled: appStore.selectedCompany !== null,
  });

  return (
    <Card title="Products">
      <List>
        <NavLink to="new">New</NavLink>
      </List>
      {outlet ??
        (products.data && (
          <Table>
            <thead>
              <tr>
                <TableHeadCell>ID</TableHeadCell>
                <TableHeadCell>Name</TableHeadCell>
              </tr>
            </thead>
            <tbody>
              {products.data.map((user) => (
                <tr key={user.id}>
                  <TableBodyCell>{user.id}</TableBodyCell>
                  <TableBodyCell>{user.name}</TableBodyCell>
                </tr>
              ))}
            </tbody>
          </Table>
        ))}
    </Card>
  );
};
