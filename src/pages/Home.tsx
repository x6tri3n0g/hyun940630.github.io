import React, { useRef } from 'react';
import { PageLayout } from 'components/Atoms';
import { MainContentsWrapper } from 'components/Home/MainContents/Atoms';
import TopNavigation from 'components/TopNavigation';
import Header from 'components/Home/Header';
import WhoAmI from 'components/Home/MainContents/WhoAmI';
import Skills from 'components/Home/MainContents/Skills';
import Experience from 'components/Home/MainContents/Experience';
// import Portfolio from 'components/Home/MainContents/Portfolio';
// import Interest from 'components/Home/MainContents/Interest';
import Footer from 'components/Home/Footer';

interface HomeProps {
    mode: string;
}

const Home: React.FC<HomeProps> = ({ mode }: HomeProps) => {
    return (
        <PageLayout mode={mode}>
            <TopNavigation />
            <Header />
            <MainContentsWrapper>
                <WhoAmI />
                <Skills />
                <Experience />
                {/* <Portfolio /> */}
                {/* <Interest /> */}
                <Footer />
            </MainContentsWrapper>
        </PageLayout>
    );
};

export default Home;
