import { type ComponentType } from 'react';
import { useQuery } from 'react-query';
import { useOutlet } from 'react-router-dom';
import { useAppStore } from '../../common/appStore';
import { httpClient } from '../../common/httpClient';
import { type Order } from '../../common/types';
import { Card } from '../core/Card';
import { List } from '../core/List';
import { NavLink } from '../core/NavLink';
import { TableList } from '../core/TableList';

export const Orders: ComponentType = () => {
  const outlet = useOutlet();
  const appStore = useAppStore();
  const orders = useQuery({
    queryKey: ['orders', appStore.selectedCompany?.id],
    queryFn: () => httpClient.fetch<Order[]>(`/orders?company_id=${appStore.selectedCompany?.id}`),
    enabled: appStore.selectedCompany !== null,
  });

  return (
    <Card title="Orders">
      <List>
        <NavLink to="new">New</NavLink>
      </List>
      {outlet ??
        (orders.data && (
          <TableList
            items={orders.data}
            headerTitles={['ID', 'Name']}
            cellPropKeys={['id', 'name']}
          />
        ))}
    </Card>
  );
};
