import { ComponentType } from 'react';
import { useOutlet } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../auth';
import { Header } from './core/Header';
import { HeaderSection } from './HeaderSection';
import { Login } from './Login';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const Home: ComponentType = () => {
  const outlet = useOutlet();
  const auth = useAuth();

  if (auth.isFetching) {
    return null;
  }

  if (!auth.isFetching && auth.user === null) {
    return <Login />;
  }

  return (
    <Container>
      <HeaderSection />
      {outlet ?? <Header>Welcome</Header>}
    </Container>
  );
};
