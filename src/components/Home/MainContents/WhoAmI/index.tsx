import React from 'react';
import {
    WhoAmIWrapper,
    LeftBlankBlock,
    IAmWrapper,
    MyImage,
    MYDes,
    WhoAmIFigureWrapper,
    WhoAmIFigureCircle,
    WhoAmIFigureVerticalLine,
} from './Atoms';

import MY_FACE_IMG from 'assets/images/my_face.png';

const WhoAmI: React.FC = () => {
    return (
        <WhoAmIWrapper>
            <LeftBlankBlock />
            <IAmWrapper>
                <MyImage>
                    <span>
                        <img src={MY_FACE_IMG} alt="MyFace" />
                    </span>
                </MyImage>
                <MYDes>
                    <h2>Who xtring</h2>
                    <div />
                    <h1>
                        Anywhere you need
                        <br />a Beautiful UX/UI.
                    </h1>
                    <p>
                        Hi 👋🏻 I&#39;m Hwang Hyun, a Frontend Developer who likes
                        to create. Beautiful UX/UI is needed for any service and
                        can be entertaining for I am always in this thought and
                        worry. We want to create the best the optimal
                        combination of business and design.
                    </p>
                </MYDes>
                <WhoAmIFigureWrapper>
                    <WhoAmIFigureCircle />
                    <WhoAmIFigureVerticalLine />
                </WhoAmIFigureWrapper>
            </IAmWrapper>
        </WhoAmIWrapper>
    );
};

export default WhoAmI;
