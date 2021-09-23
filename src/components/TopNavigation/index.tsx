import React from 'react';
import {
    TopNavigationWrapper,
    TopNavigationContainer,
    Category,
    SNSLinks,
} from './Atoms';
// import ColorToggleSwitch from './ColorToggleSwitch';
import I_IMAGE from 'assets/images/i.png';

const TopNavigation: React.FC = () => {
    return (
        <TopNavigationWrapper>
            <TopNavigationContainer>
                <Category>
                    <a href="#">
                        <img src={I_IMAGE} alt="me" />
                    </a>
                    <li>
                        <a href="#who">Who is Hyun?</a>
                    </li>
                    <li>
                        <a href="#skills">skills</a>
                    </li>
                    <li>
                        <a href="#experience">Experiences</a>
                    </li>
                    {/*
                    <li>
                        <a>Portfolio</a>
                    </li>
                    <li>
                        <a>Interest</a>
                    </li>
                    */}
                </Category>

                <SNSLinks>
                    <li>
                        <a href="https://github.com/hyun940630">Github</a>
                    </li>
                    <li>
                        <a href="https://xtring-dev.tistory.com/">Blog</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/x6tri3n0g/">Insta</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/hhyun06/">FB</a>
                    </li>
                    {/*
                    <li>
                        <ColorToggleSwitch />
                    </li>
                    */}
                </SNSLinks>
            </TopNavigationContainer>
        </TopNavigationWrapper>
    );
};

export default TopNavigation;
