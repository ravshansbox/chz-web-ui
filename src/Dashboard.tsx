import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './auth';

export const Dashboard = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if (!auth.isAuthenticated && !auth.isAuthenticating) {
      navigate('/signin');
    }
  }, []);

  return <h1>Dashboard</h1>;
};
