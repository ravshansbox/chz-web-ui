import { ComponentType, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Header as HeadingCore } from './Header';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const Heading = styled(HeadingCore)(({ theme }) => ({
  backgroundColor: theme.cardHeadingBgColor,
}));

const Content = styled('div')({
  padding: '4px',
});

type CardProps = {
  title: string;
};
export const Card: ComponentType<PropsWithChildren<CardProps>> = ({ children, title }) => {
  return (
    <Container>
      <Heading>{title}</Heading>
      <Content>{children}</Content>
    </Container>
  );
};
