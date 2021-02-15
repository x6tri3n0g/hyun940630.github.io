import React from 'react';
import {
    ExperienceWrapper,
    ExperienceCardWrapper,
    ExperienceBackground,
} from './Atoms';
import EXPERIENCE_BACKGROUND from 'assets/images/experience_background.svg';

const Experience: React.FC = () => {
    return (
        <ExperienceWrapper>
            <ExperienceBackground />
            <ExperienceCardWrapper>
                <ul>
                    <li>원광대학교 컴퓨터공학과</li>
                    <li>석세스모드 SUCCESSMODE</li>
                    <li>네오플랫neoflat</li>
                </ul>
                <ExperienceCardWrapper>
                    {/* <img src={EXPERIENCE_BACKGROUND} alt="" /> */}
                    <span>
                        <h1>Project</h1>
                        <p>
                            Hi 👋🏻 I&#39;m Hwang Hyun, a Frontend Developer who
                            likes to create. Beautiful UX/UI is needed for any
                            service and can be entertaining for I am always in
                            this thought and worry. We want to create the best
                            the optimal combination of business and design.
                        </p>
                    </span>
                </ExperienceCardWrapper>
            </ExperienceCardWrapper>
        </ExperienceWrapper>
    );
};

export default Experience;
