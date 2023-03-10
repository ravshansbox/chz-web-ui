import { type ComponentType } from 'react';
import { useQuery } from 'react-query';
import { useOutlet } from 'react-router-dom';
import { useAppStore } from '../../common/appStore';
import { QUERY_KEYS } from '../../common/constants';
import { httpClient } from '../../common/httpClient';
import { type Customer } from '../../common/types';
import { Card } from '../core/Card';
import { List } from '../core/List';
import { NavLink } from '../core/NavLink';
import { TableList } from '../core/TableList';

export const Customers: ComponentType = () => {
  const outlet = useOutlet();
  const appStore = useAppStore();
  const customers = useQuery({
    queryKey: [QUERY_KEYS.CUSTOMERS, appStore.selectedCompany?.id],
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
