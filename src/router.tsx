import { createBrowserRouter } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { SignIn } from './SignIn';

export const router = createBrowserRouter([
  { path: '/', element: <Dashboard /> },
  { path: '/signin', element: <SignIn /> },
]);
