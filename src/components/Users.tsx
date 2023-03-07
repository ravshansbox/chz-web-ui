import { ComponentType, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers } from '../api/userApi';
import { AppState, useAppDispatch } from '../store';
import { Card } from './core/Card';
import { Table, TableBodyCell, TableHeadCell } from './core/Table';

export const Users: ComponentType = () => {
  const users = useSelector((state: AppState) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Card title="Users">
      <Table>
        <thead>
          <tr>
            <TableHeadCell>ID</TableHeadCell>
            <TableHeadCell>Username</TableHeadCell>
            <TableHeadCell>Root</TableHeadCell>
          </tr>
        </thead>
        <tbody>
          {users.users?.map((user, index) => (
            <tr key={index}>
              <TableBodyCell>{user.id}</TableBodyCell>
              <TableBodyCell>{user.username}</TableBodyCell>
              <TableBodyCell>{String(user.is_root)}</TableBodyCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};