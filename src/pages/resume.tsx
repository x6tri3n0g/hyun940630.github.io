import { MainContentsWrapper } from 'components/Home/MainContents/Atoms';
import TopNavigation from 'components/TopNavigation';
import Header from 'components/Home/Header';
import WhoAmI from 'components/Home/MainContents/WhoAmI';
import Skills from 'components/Home/MainContents/Skills';
import Experience from 'components/Home/MainContents/Experience';
import Interest from 'components/Home/MainContents/Interest';
import Footer from 'components/Home/Footer';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  scroll-behavior: smooth;
  background-color: #ffffff;
  color: #16162b;
`;

export default function ResumePage() {
  return (
    <Container id="top">
      <TopNavigation />
      <Header />
      <MainContentsWrapper>
        <WhoAmI />
        <Skills />
        <Experience />
        <Interest />
        <Footer />
      </MainContentsWrapper>
    </Container>
  );
}
