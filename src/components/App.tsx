import { type ComponentType } from 'react';
import { QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AppStoreProvider } from '../common/appStore';
import { AuthProvider } from '../common/auth';
import { queryClient } from '../common/queryClient';
import { router } from '../common/router';
import { theme } from '../common/theme';
import { GlobalStyles } from './GlobalStyles';

export const App: ComponentType = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AuthProvider>
      <AppStoreProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AppStoreProvider>
    </AuthProvider>
  </ThemeProvider>
);
