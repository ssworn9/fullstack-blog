import React from 'react';
import { MainContent, PageInner, PageWrapper } from './styles';
import { Container } from '../shared';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { Footer } from './Footer/Footer';

export interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <PageWrapper>
      <Header />
      <Container>
        <PageInner>
          <MainContent>{children}</MainContent>
          <Sidebar />
        </PageInner>
      </Container>
      <Footer />
    </PageWrapper>
  );
};
