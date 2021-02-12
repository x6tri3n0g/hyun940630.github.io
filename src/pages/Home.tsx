import React from 'react';
import { PageWrapper } from 'components/Atoms';
import Header from 'components/Home/Header';

const Home: React.FC = () => {
    return (
        <PageWrapper>
            <Header />
            <h1>Home</h1>
        </PageWrapper>
    );
};

export default Home;
