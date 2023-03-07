import { ComponentType } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import { signOut } from '../api/authApi';
import { AppState, useAppDispatch } from '../store';
import { LinkButton } from './core/LinkButton';
import { List } from './core/List';

const links = [
  { path: '', title: 'Dashboard' },
  { path: 'users', title: 'Users' },
  { path: 'companies', title: 'Companies' },
];

const Item = styled('li')({
  paddingInline: '4px',
});

export const HeaderSection: ComponentType = () => {
  const theme = useTheme();
  const auth = useSelector((state: AppState) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <List>
      {links.map((link, index) => (
        <Item key={index}>
          <NavLink
            style={({ isActive }) => ({
              color: theme.linkColor,
              textDecoration: isActive ? 'underline' : 'none',
            })}
            to={link.path}
          >
            {link.title}
          </NavLink>
        </Item>
      ))}
      <Item>
        <span>{auth.username}</span>
        <span>(</span>
        <LinkButton
          onClick={() => {
            dispatch(signOut());
          }}
        >
          sign out
        </LinkButton>
        <span>)</span>
      </Item>
    </List>
  );
};
