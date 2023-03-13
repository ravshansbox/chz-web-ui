import { type ComponentType } from 'react';
import { useQuery } from 'react-query';
import { useOutlet } from 'react-router-dom';
import { QUERY_KEYS } from '../../common/constants';
import { httpClient } from '../../common/httpClient';
import { type Company } from '../../common/types';
import { Card } from '../core/Card';
import { List } from '../core/List';
import { NavLink } from '../core/NavLink';
import { TableList } from '../core/TableList';

export const Companies: ComponentType = () => {
  const outlet = useOutlet();
  const companies = useQuery({
    queryKey: [QUERY_KEYS.COMPANIES],
    queryFn: () => httpClient.fetch<Company[]>('/companies'),
  });

  return (
    <Card title="Companies">
      <List>
        <NavLink to="new">New</NavLink>
      </List>
      {outlet ??
        (companies.data && (
          <TableList
            items={companies.data}
            headerTitles={['ID', 'Name']}
            cellPropKeys={['id', 'name']}
          />
        ))}
    </Card>
  );
};
