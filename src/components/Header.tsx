import { ComponentType } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { signOut } from '../api/authApi';
import { AppState, useAppDispatch } from '../store';

const visibleLinks = [
  { path: '', title: 'Dashboard' },
  { path: 'users', title: 'Users' },
  { path: 'companies', title: 'Companies' },
];

const List = styled('ul')({
  display: 'flex',
  listStyleType: 'none',
  paddingInlineStart: '0',
});

const Item = styled('li')({
  paddingInline: '4px',
});

const Button = styled('button')({
  backgroundColor: 'transparent',
  border: 'none',
  color: 'rgb(0, 0, 238)',
  cursor: 'pointer',
  padding: '0',
});

export const Sidebar: ComponentType = () => {
  const auth = useSelector((state: AppState) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <List>
      {visibleLinks.map((link, index) => (
        <Item key={index}>
          <NavLink
            style={({ isActive }) => ({
              color: 'rgb(0, 0, 238)',
              textDecoration: isActive ? 'underline' : 'none',
            })}
            to={link.path}
          >
            {link.title}
          </NavLink>
        </Item>
      ))}
      <Item>
        <span>{auth.username}</span>(
        <Button
          onClick={() => {
            dispatch(signOut());
          }}
        >
          sign out
        </Button>
        )
      </Item>
    </List>
  );
};
