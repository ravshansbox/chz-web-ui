import { createBrowserRouter } from 'react-router-dom';
import { Companies } from './components/Companies';
import { Dashboard } from './components/Dashboard';
import { SignIn } from './components/SignIn';
import { NewUser } from './components/users/NewUser';
import { Users } from './components/users/Users';
import { URLs } from './constants';

export const router = createBrowserRouter([
  {
    path: URLs.root,
    element: <Dashboard />,
    children: [
      { path: URLs.users, element: <Users /> },
      { path: URLs.usersNew, element: <NewUser /> },
      { path: URLs.companies, element: <Companies /> },
    ],
  },
  { path: URLs.signIn, element: <SignIn /> },
]);
