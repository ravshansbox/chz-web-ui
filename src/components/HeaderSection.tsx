import { ComponentType } from 'react';
import { useSelector } from 'react-redux';
import styled, { useTheme } from 'styled-components';
import { signOut } from '../api/authApi';
import { AppState, useAppDispatch } from '../store';
import { LinkButton } from './core/LinkButton';
import { List } from './core/List';
import { NavLink } from './core/NavLink';

const links = [
  { path: '', title: 'Dashboard' },
  { path: 'users', title: 'Users' },
  { path: 'companies', title: 'Companies' },
];

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

const Item = styled('li')({
  paddingInline: '4px',
});

export const HeaderSection: ComponentType = () => {
  const theme = useTheme();
  const auth = useSelector((state: AppState) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <Container>
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
      </List>
      <List>
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
    </Container>
  );
};
