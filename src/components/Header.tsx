import { ComponentType } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AppState } from '../store';

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

const Link = styled(NavLink)({
  color: 'rgb(0, 0, 238)',
  textDecoration: 'none',
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

  return (
    <List>
      {visibleLinks.map((link, index) => (
        <Item key={index}>
          <Link
            style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}
            to={link.path}
          >
            {link.title}
          </Link>
        </Item>
      ))}
      <Item>
        <span>{auth.username}</span>(<Button>sign out</Button>)
      </Item>
    </List>
  );
};
