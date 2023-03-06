import { createBrowserRouter } from 'react-router-dom';
import { Companies } from './components/Companies';
import { Dashboard } from './components/Dashboard';
import { SignIn } from './components/SignIn/SignIn';
import { Users } from './components/Users';

export const router = createBrowserRouter([
  {
    path: '',
    element: <Dashboard />,
    children: [
      { path: 'users', element: <Users /> },
      { path: 'companies', element: <Companies /> },
    ],
  },
  { path: 'signin', element: <SignIn /> },
]);
