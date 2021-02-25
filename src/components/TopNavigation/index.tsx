import React, { useState, useRef, useEffect } from 'react';
import {
    TopNavigationWrapper,
    TopNavigationContainer,
    Category,
    SNSLinks,
} from './Atoms';
import ColorToggleSwitch from './ColorToggleSwitch';
import I_IMAGE from 'assets/images/i.png';

const TopNavigation: React.FC = ({}) => {
    const [hide, setHide] = useState(false);
    const [pageY, setPageY] = useState(0);
    const documentRef = useRef(document);

    const handleScroll = () => {
        const { pageYOffset } = window;
        const deltaY = pageYOffset - pageY;
        const hide = pageYOffset !== 0 && deltaY >= 0;
        setHide(hide);
        setPageY(pageYOffset);
    };

    useEffect(() => {
        documentRef.current.addEventListener('scroll', handleScroll);
        return () =>
            documentRef.current.removeEventListener('scroll', handleScroll);
    }, [pageY]);

    return (
        <TopNavigationWrapper className={hide && 'hide'}>
            <TopNavigationContainer>
                <Category>
                    <a onClick={() => alert("It's me!")}>
                        <img src={I_IMAGE} alt="me" />
                    </a>
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
                        <ColorToggleSwitch />
                    </li>
                </SNSLinks>
            </TopNavigationContainer>
        </TopNavigationWrapper>
    );
};

export default TopNavigation;
