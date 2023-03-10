import { type ComponentType, type PropsWithChildren } from 'react';
import styled from 'styled-components';
import { Header as HeadingCore } from './Header';

const Container = styled('div')(({ theme }) => ({
  border: `1px solid ${theme.cardHeadingBgColor}`,
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  padding: '4px',
}));

const Heading = styled(HeadingCore)(({ theme }) => ({
  backgroundColor: theme.cardHeadingBgColor,
}));

const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
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
