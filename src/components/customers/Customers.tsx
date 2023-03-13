import { type ComponentType } from 'react';
import { useQuery } from 'react-query';
import { NavLink, useOutlet } from 'react-router-dom';
import { useAppStore } from '../../common/appStore';
import { httpClient } from '../../common/httpClient';
import { type Customer } from '../../common/types';
import { Card } from '../core/Card';
import { List } from '../core/List';
import { TableList } from '../core/TableList';

export const Customers: ComponentType = () => {
  const outlet = useOutlet();
  const appStore = useAppStore();
  const customers = useQuery({
    queryKey: ['customers', appStore.selectedCompany?.id],
    queryFn: () =>
      httpClient.fetch<Customer[]>(`/customers?company_id=${appStore.selectedCompany?.id}`),
    enabled: appStore.selectedCompany !== null,
  });

  return (
    <Card title="Customers">
      <List>
        <NavLink to="new">New</NavLink>
      </List>
      {outlet ??
        (customers.data && (
          <TableList
            items={customers.data}
            headerTitles={['ID', 'Name']}
            cellPropKeys={['id', 'name']}
          />
        ))}
    </Card>
  );
};
