import { createBrowserRouter } from 'react-router-dom';
import { Companies } from './components/companies/Companies';
import { NewCompany } from './components/companies/NewCompany';
import { Home } from './components/Home';
import { SignIn } from './components/SignIn';
import { NewUser } from './components/users/NewUser';
import { Users } from './components/users/Users';

export const router = createBrowserRouter([
  {
    path: '',
    element: <Home />,
    children: [
      {
        path: 'users',
        element: <Users />,
        children: [{ path: 'new', element: <NewUser /> }],
      },
      {
        path: 'companies',
        element: <Companies />,
        children: [{ path: 'new', element: <NewCompany /> }],
      },
    ],
  },
  { path: 'signin', element: <SignIn /> },
]);
