import { ComponentType } from 'react';
import styled, { useTheme } from 'styled-components';
import { useAuth } from '../auth';
import { LinkButton } from './core/LinkButton';
import { List } from './core/List';
import { NavLink } from './core/NavLink';

const links = [
  { path: '', title: 'Home' },
  { path: 'users', title: 'Users' },
  { path: 'companies', title: 'Companies' },
];

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

export const HeaderSection: ComponentType = () => {
  const theme = useTheme();
  const auth = useAuth();

  return (
    <Container>
      <List>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              style={({ isActive }) => ({
                color: theme.linkColor,
                textDecoration: isActive ? 'underline' : 'none',
              })}
              to={link.path}
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </List>
      <List>
        <li>
          <span>{auth.user?.username}</span>
          <span>(</span>
          <LinkButton
            onClick={async () => {
              await auth.logout();
            }}
          >
            logout
          </LinkButton>
          <span>)</span>
        </li>
      </List>
    </Container>
  );
};
