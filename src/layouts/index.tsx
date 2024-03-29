// import { useUser } from 'contexts/User'
import { Header } from '@/components/template/Header/Header';
import { ReactNode } from 'react';
import { Body, Container, Content, Main } from './styles';
import { Footer } from '@/components/template/Footer/Footer';

export function Layout(props: { children: ReactNode }) {
  return (
    <Container>
      <Body>
        <Header />
        <Main>
          <Content>{props.children}</Content>
        </Main>
        <Footer />
      </Body>
    </Container>
  );
}
