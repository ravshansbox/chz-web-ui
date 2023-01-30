import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAccessToken } from './api';
import { ACCESS_TOKEN_ID_KEY } from './constants';
import { AppState, useAppDispatch } from './store';

export const Dashboard = () => {
  const [isAuthTriggered, setIsAuthTriggered] = useState(false);
  const auth = useSelector((state: AppState) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthTriggered(true);
    const accessTokenId = window.localStorage.getItem(ACCESS_TOKEN_ID_KEY);
    if (accessTokenId !== null) {
      dispatch(fetchAccessToken(accessTokenId));
    }
  }, []);

  useEffect(() => {
    if (isAuthTriggered && !auth.isAuthenticating && !auth.isAuthenticated) {
      navigate('/signin');
    }
  }, [isAuthTriggered, auth.isAuthenticated, auth.isAuthenticating]);

  return <h1>Dashboard</h1>;
};
