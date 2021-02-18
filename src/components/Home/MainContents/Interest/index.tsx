import React from 'react';
import { InterestWrapper, InterestBackground, InterestContent } from './Atoms';

const Interest: React.FC = () => {
    return (
        <InterestWrapper>
            <InterestBackground>
                <InterestContent>
                    <h1>
                        Interest
                        <span />
                    </h1>
                    <p>
                        Hi 👋🏻 Im Hwang Hyun, a Frontend Developer who likes to
                        create. Beautiful UX/UI is needed for any service and
                        can be entertaining for I am always in this thought and
                        worry.
                    </p>
                    <div>이미지 슬라이드</div>
                </InterestContent>
            </InterestBackground>
        </InterestWrapper>
    );
};

export default Interest;
