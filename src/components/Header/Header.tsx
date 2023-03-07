import { ComponentType } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.scss';

const visibleLinks = [
  { path: '', title: 'Dashboard' },
  { path: 'users', title: 'Users' },
  { path: 'companies', title: 'Companies' },
];

export const Sidebar: ComponentType = () => {
  return (
    <ul className={classes.list}>
      {visibleLinks.map((link, index) => (
        <li key={index}>
          <NavLink to={link.path}>{link.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};
