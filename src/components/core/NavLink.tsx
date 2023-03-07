import { ComponentType } from 'react';
import { NavLink as NavLinkCore, NavLinkProps } from 'react-router-dom';
import { useTheme } from 'styled-components';

export const NavLink: ComponentType<NavLinkProps> = (props) => {
  const theme = useTheme();

  return (
    <NavLinkCore
      style={({ isActive }) => ({
        color: theme.linkColor,
        textDecoration: isActive ? 'underline' : 'none',
      })}
      {...props}
    />
  );
};
