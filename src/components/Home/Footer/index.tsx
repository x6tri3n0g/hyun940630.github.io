import React from 'react';
import { FooterWrapper } from './Atoms';

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <ul>
                <span />
                <li>
                    Developed by
                    <br />
                    Hyun(xtring)
                </li>
                <span />
                <li>
                    Designed by
                    <br />
                    Yong(ruddy)
                </li>
                <span />
                <li>
                    Contact me by
                    <br />
                    Email or SNS.
                </li>
            </ul>
        </FooterWrapper>
    );
};

export default Footer;
