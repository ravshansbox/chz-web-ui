import { createBrowserRouter } from 'react-router-dom';
import { Companies } from './components/companies/Companies';
import { NewCompany } from './components/companies/NewCompany';
import { Home } from './components/Home';
import { SignIn } from './components/SignIn';
import { NewUser } from './components/users/NewUser';
import { Users } from './components/users/Users';
import { URLs } from './constants';

export const router = createBrowserRouter([
  {
    path: URLs.root,
    element: <Home />,
    children: [
      { path: URLs.users, element: <Users /> },
      { path: URLs.usersNew, element: <NewUser /> },
      { path: URLs.companies, element: <Companies /> },
      { path: URLs.companiesNew, element: <NewCompany /> },
    ],
  },
  { path: URLs.signIn, element: <SignIn /> },
]);
