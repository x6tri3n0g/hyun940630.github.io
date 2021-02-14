import React from 'react';
import { PageLayout } from 'components/Atoms';
import { MainContentsWrapper } from 'components/Home/MainContents/Atoms';
import Header from 'components/Home/Header';
import WhoAmI from 'components/Home/MainContents/WhoAmI';

const Home: React.FC = () => {
    return (
        <PageLayout>
            <Header />
            <MainContentsWrapper>
                <WhoAmI />
            </MainContentsWrapper>
        </PageLayout>
    );
};

export default Home;
