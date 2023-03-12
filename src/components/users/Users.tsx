import { ComponentType } from 'react';
import { useQuery } from 'react-query';
import { useOutlet } from 'react-router-dom';
import { fetchUsers } from '../../api/userApi';
import { Card } from '../core/Card';
import { List } from '../core/List';
import { NavLink } from '../core/NavLink';
import { Table, TableBodyCell, TableHeadCell } from '../core/Table';

export const Users: ComponentType = () => {
  const outlet = useOutlet();
  const users = useQuery('users', fetchUsers);

  return (
    <Card title="Users">
      <List>
        <NavLink to="new">New</NavLink>
      </List>
      {outlet ??
        (users.data && (
          <Table>
            <thead>
              <tr>
                <TableHeadCell>ID</TableHeadCell>
                <TableHeadCell>Username</TableHeadCell>
                <TableHeadCell>Root</TableHeadCell>
              </tr>
            </thead>
            <tbody>
              {users.data.map((user) => (
                <tr key={user.id}>
                  <TableBodyCell>{user.id}</TableBodyCell>
                  <TableBodyCell>{user.username}</TableBodyCell>
                  <TableBodyCell>{String(user.is_root)}</TableBodyCell>
                </tr>
              ))}
            </tbody>
          </Table>
        ))}
    </Card>
  );
};
