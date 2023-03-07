import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle({
  '*': {
    boxSizing: 'inherit',
  },
  html: {
    boxSizing: 'border-box',
  },
  body: {
    margin: '0',
  },
});
