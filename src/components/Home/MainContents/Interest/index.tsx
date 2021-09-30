import React from 'react';
import {
    InterestWrapper,
    InterestBackground,
    InterestContent,
    InterestGallery,
} from './Atoms';

const Interest: React.FC = () => {
    return (
        <InterestWrapper>
            <InterestBackground>
                <InterestContent>
                    <h1>
                        Interest
                        <span />
                    </h1>
                    <ul>
                        <li>Web development(MVVM pattern)</li>
                        <li>Mobile development(Multi platform Application)</li>
                        <li>ML / Data science(just interest...)</li>
                        <li>Team work(to do work better)</li>
                    </ul>
                    <p>I work every day to achieve my dream as a developer.</p>
                </InterestContent>
            </InterestBackground>
        </InterestWrapper>
    );
};

export default Interest;
