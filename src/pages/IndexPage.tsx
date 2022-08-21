import React from 'react';

import { PageLayout } from 'components/Atoms';
import IndexPageContainer from 'containers/IndexPageContainer';

const IndexPage: React.FC = () => {
    const [mode] = React.useState('light'); // TODO: 다크모드 만들기

    return (
        <PageLayout mode={mode}>
            <IndexPageContainer />
        </PageLayout>
    );
};

export default IndexPage;
