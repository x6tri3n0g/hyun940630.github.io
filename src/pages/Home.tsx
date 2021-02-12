import React from 'react';
import { PageLayout } from 'components/Atoms';
import Header from 'components/Home/Header';

const Home: React.FC = () => {
    return (
        <PageLayout>
            <Header />
            <h1>Contents</h1>
        </PageLayout>
    );
};

export default Home;
