import React from 'react';
import { PortfolioWrapper } from './Atoms';

const Portfolio: React.FC = () => {
    return (
        <PortfolioWrapper>
            <div>
                <h1>Portfolio</h1>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div>
                <div>
                    <h2>Introduce(제목을쓸까? 🧐)</h2>
                    <p>
                        Hi 👋🏻 I&#39;m Hwang Hyun, a Frontend Developer who likes
                        to create. Beautiful UX/UI is needed for any service and
                        can be entertaining I am always in this thought and
                        worry. We want to create the best the optimal
                        combination of business and design.
                    </p>
                    <h2>Explanation / Feeling</h2>
                    <p>
                        Hi 👋🏻 I&#39;m Hwang Hyun, a Frontend Developer who likes
                        to create. Beautiful UX/UI is needed for any service and
                        can be entertaining I am always in this thought and
                        worry. We want to create the best the optimal
                        combination of business and design.
                    </p>
                    <ul>
                        <li>
                            <img src="#" alt="production_icon" />
                            <a href="https://github.com/hyun940630">Website</a>
                        </li>
                        <li>
                            <img src="#" alt="github_icon" />
                            <a href="https://github.com/hyun940630">github</a>
                        </li>
                    </ul>
                </div>
                <img src="#" alt="production_img" />
            </div>
        </PortfolioWrapper>
    );
};

export default Portfolio;
