import React from 'react';
import { MainContentsWrapper } from 'components/Home/MainContents/Atoms';
import TopNavigation from 'components/TopNavigation';
import Header from 'components/Home/Header';
import WhoAmI from 'components/Home/MainContents/WhoAmI';
import Skills from 'components/Home/MainContents/Skills';
import Experience from 'components/Home/MainContents/Experience';
// import Portfolio from 'components/Home/MainContents/Portfolio';
import Interest from 'components/Home/MainContents/Interest';
import Footer from 'components/Home/Footer';

const IndexPageContainer: React.FC = () => {
    return (
        <>
            <TopNavigation />
            <Header />
            <MainContentsWrapper>
                <WhoAmI />
                <Skills />
                <Experience />
                {/* <Portfolio /> */}
                <Interest />
                <Footer />
            </MainContentsWrapper>
        </>
    );
};

export default IndexPageContainer;
