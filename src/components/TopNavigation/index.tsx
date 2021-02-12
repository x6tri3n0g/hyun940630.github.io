import React from 'react';
import {
    TopNavigationWrapper,
    TopNavigationContainer,
    Category,
    SNSLinks,
} from './Atoms';
import ColorToggleSwitch from './ColorToggleSwitch';
import I_IMAGE from 'assets/images/i.png';

interface ThemeModeProps {
    themeMode: string;
}

const TopNavigation: React.FC = ({ toggleTheme }) => {
    return (
        <TopNavigationWrapper>
            <TopNavigationContainer>
                <Category>
                    <li>
                        <a onClick={() => alert("It's me!")}>
                            <img src={I_IMAGE} alt="me" />
                        </a>
                    </li>
                    <li>
                        <a>Who xtring?</a>
                    </li>
                    <li>
                        <a>skill</a>
                    </li>
                    <li>
                        <a>Experience</a>
                    </li>
                    <li>
                        <a>Portfolio</a>
                    </li>
                    <li>
                        <a>Interest</a>
                    </li>
                </Category>

                <SNSLinks>
                    <li>
                        <a>Github</a>
                    </li>
                    <li>
                        <a>Blog</a>
                    </li>
                    <li>
                        <a>Insta</a>
                    </li>
                    <li>
                        <a>FB</a>
                    </li>
                    <li>
                        <ColorToggleSwitch toggleTheme={toggleTheme} />
                    </li>
                </SNSLinks>
            </TopNavigationContainer>
        </TopNavigationWrapper>
    );
};

export default TopNavigation;
