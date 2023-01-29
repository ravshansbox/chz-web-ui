import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppState } from './store';

export const Dashboard = () => {
  const auth = useSelector((state: AppState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated && !auth.isAuthenticating) {
      navigate('/signin');
    }
  }, []);

  return <h1>Dashboard</h1>;
};
