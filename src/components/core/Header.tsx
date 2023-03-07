import styled from 'styled-components';

export const Header = styled('header')(({ theme }) => ({
  fontSize: theme.headingFontSize,
  fontWeight: 'bold',
  padding: '4px',
}));
