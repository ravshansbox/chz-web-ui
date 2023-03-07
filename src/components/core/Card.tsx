import { ComponentType, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Header as HeadingCore } from './Header';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '4px',
});

const Heading = styled(HeadingCore)(({ theme }) => ({
  backgroundColor: theme.cardHeadingBgColor,
}));

const Content = styled('div')({});

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
