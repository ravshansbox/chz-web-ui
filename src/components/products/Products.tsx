import { type ComponentType } from 'react';
import { useQuery } from 'react-query';
import { NavLink, useOutlet } from 'react-router-dom';
import { useAppStore } from '../../common/appStore';
import { httpClient } from '../../common/httpClient';
import { type Product } from '../../common/types';
import { Card } from '../core/Card';
import { List } from '../core/List';
import { TableList } from '../core/TableList';

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
          <TableList
            items={products.data}
            headerTitles={['ID', 'Name']}
            cellPropKeys={['id', 'name']}
          />
        ))}
    </Card>
  );
};
