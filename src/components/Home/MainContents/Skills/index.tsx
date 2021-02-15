import React from 'react';
import { SkillsWrapper, SkillsContents, SkillsCategory } from './Atoms';

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
                <div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </SkillsContents>
        </SkillsWrapper>
    );
};

export default Skills;
