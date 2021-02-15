import React from 'react';
import {
    SkillsWrapper,
    SkillsContents,
    SkillsCategory,
    SkillsCardWrapper,
    SkillsTagWrapper,
} from './Atoms';

const Skills: React.FC = () => {
    return (
        <SkillsWrapper>
            <SkillsContents>
                <SkillsCategory>
                    <div>
                        <h1>Skills</h1>
                        <div />
                        <ul>
                            <li>
                                <a>Front-end</a>
                            </li>
                            <li>
                                <a>Back-end</a>
                            </li>
                            <li>
                                <a>Soft Skills</a>
                            </li>
                        </ul>
                    </div>
                </SkillsCategory>
                <SkillsCardWrapper>
                    <SkillsTagWrapper>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </SkillsTagWrapper>
                    <p>
                        Hi 👋🏻 I&#39;m Hwang Hyun, a Frontend Developer who likes
                        to create. Beautiful UX/UI is needed for any service and
                        can be entertaining for I am always in this thought and
                        worry. We want to create the best the optimal
                        combination of business and design. thought and worry.
                        We want to create the best the optimal combination. yun,
                        a Frontend Developer who likes to create. Beautiful
                        UX/UI is needed for any service and thought and worry.
                    </p>
                </SkillsCardWrapper>
            </SkillsContents>
        </SkillsWrapper>
    );
};

export default Skills;
