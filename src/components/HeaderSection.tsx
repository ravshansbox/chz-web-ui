import { type ComponentType } from 'react';
import styled, { useTheme } from 'styled-components';
import { useAuth } from '../common/auth';
import { LinkButton } from './core/LinkButton';
import { List } from './core/List';
import { NavLink } from './core/NavLink';
import { SelectCompany } from './SelectCompany';

const links = [
  { path: '', title: 'Home' },
  { path: 'users', title: 'Users' },
  { path: 'companies', title: 'Companies' },
  { path: 'products', title: 'Products', nonRootOnly: true },
  { path: 'orders', title: 'Orders', nonRootOnly: true },
];

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

export const HeaderSection: ComponentType = () => {
  const theme = useTheme();
  const auth = useAuth();
  const isRoot = auth.user !== null && auth.user.is_root;

  return (
    <Container>
      <List>
        {links.map((link, index) =>
          link.nonRootOnly && isRoot ? null : (
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
          ),
        )}
      </List>
      <SelectCompany />
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
