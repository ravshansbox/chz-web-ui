import { ComponentType } from 'react';
import { QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from '../common/auth';
import { queryClient } from '../common/queryClient';
import { router } from '../common/router';
import { theme } from '../common/theme';
import { GlobalStyles } from './GlobalStyles';

export const App: ComponentType = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}></RouterProvider>
        </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
