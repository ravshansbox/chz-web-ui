import { ComponentType, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useOutlet } from 'react-router-dom';
import { restoreAccessToken } from '../api/authApi';
import { AppState, useAppDispatch } from '../store';
import { Header } from './core/Header';
import { HeaderSection } from './HeaderSection';

export const Home: ComponentType = () => {
  const [isAuthTriggered, setIsAuthTriggered] = useState(false);
  const auth = useSelector((state: AppState) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthTriggered(true);
    dispatch(restoreAccessToken());
  }, []);

  useEffect(() => {
    if (isAuthTriggered && !auth.isAuthenticating && !auth.isAuthenticated) {
      navigate('/signin');
    }
  }, [isAuthTriggered, auth.isAuthenticated, auth.isAuthenticating]);

  const outlet = useOutlet();

  if (!isAuthTriggered) {
    return null;
  }

  return (
    <div>
      <HeaderSection />
      {outlet || <Header>Welcome</Header>}
    </div>
  );
};
