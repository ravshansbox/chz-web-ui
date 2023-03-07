import styled from 'styled-components';

export const LinkButton = styled('button')(({ theme }) => ({
  backgroundColor: 'transparent',
  border: 'none',
  color: theme.linkColor,
  cursor: 'pointer',
  padding: '0',
}));
