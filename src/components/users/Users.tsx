import { type ComponentType } from 'react';
import { useQuery } from 'react-query';
import { useOutlet } from 'react-router-dom';
import { QUERY_KEYS } from '../../common/constants';
import { httpClient } from '../../common/httpClient';
import { type User } from '../../common/types';
import { Card } from '../core/Card';
import { List } from '../core/List';
import { NavLink } from '../core/NavLink';
import { TableList } from '../core/TableList';

export const Users: ComponentType = () => {
  const outlet = useOutlet();
  const users = useQuery({
    queryKey: [QUERY_KEYS.USERS],
    queryFn: () => httpClient.fetch<User[]>('/users'),
  });

  return (
    <Card title="Users">
      <List>
        <NavLink to="new">New</NavLink>
      </List>
      {outlet ??
        (users.data && (
          <TableList
            items={users.data}
            headerTitles={['ID', 'Username', 'Root']}
            cellPropKeys={['id', 'username', 'is_root']}
          />
        ))}
    </Card>
  );
};
