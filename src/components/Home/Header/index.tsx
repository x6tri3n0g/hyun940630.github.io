import React from 'react';
import { HeaderWrapper, HeaderAnimationContents } from './Atoms';

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <div>
                <span>
                    <h1>
                        Anywhere you need a<br />
                        Beautiful UX/UI.
                    </h1>
                    <p>
                        Hi 👋🏻 I&#39;m <strong>Hwang Hyun</strong>, a{' '}
                        <strong>Frontend Developer</strong> who likes to create
                        <strong>Beautiful UX/UI</strong>. Beautiful UX/UI is
                        needed for any service and can be entertaining for
                        anyone. I am always in this thought and worry. We want
                        to create the best service with the optimal combination
                        of business and design.
                    </p>
                </span>
                <HeaderAnimationContents></HeaderAnimationContents>
            </div>
        </HeaderWrapper>
    );
};

export default Header;
