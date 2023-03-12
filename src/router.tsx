import { createBrowserRouter } from 'react-router-dom';
import { Companies } from './components/companies/Companies';
import { NewCompany } from './components/companies/NewCompany';
import { Home } from './components/Home';
import { NewUser } from './components/users/NewUser';
import { Users } from './components/users/Users';

export const router = createBrowserRouter([
  {
    path: '',
    Component: Home,
    children: [
      {
        path: 'users',
        Component: Users,
        children: [
          {
            path: 'new',
            Component: NewUser,
          },
        ],
      },
      {
        path: 'companies',
        element: <Companies />,
        children: [
          {
            path: 'new',
            Component: NewCompany,
          },
        ],
      },
    ],
  },
]);
