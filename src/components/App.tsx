import { ComponentType } from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { router } from '../router';
import { store } from '../store';
import { theme } from '../theme';
import { GlobalStyles } from './GlobalStyles';

export const App: ComponentType = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </ThemeProvider>
  );
};