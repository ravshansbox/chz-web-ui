import { ComponentType, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers } from '../../api/userApi';
import { AppState, useAppDispatch } from '../../store';
import classes from './Users.module.scss';

export const Users: ComponentType = () => {
  const users = useSelector((state: AppState) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <>
      <h1>Users</h1>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Root</th>
          </tr>
        </thead>
        <tbody>
          {users.users?.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{String(user.is_root)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
