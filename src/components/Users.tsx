import { ComponentType, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchUsers } from '../api/userApi';
import { AppState, useAppDispatch } from '../store';

const Table = styled('table')({
  width: '100%',
  borderCollapse: 'collapse',
  border: '1px solid lightgray',
});

const TableHeadCell = styled('th')({
  border: '1px solid lightgray',
});

const TableBodyCell = styled('td')({
  border: '1px solid lightgray',
});

export const Users: ComponentType = () => {
  const users = useSelector((state: AppState) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <h1>Users</h1>
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
    </>
  );
};
