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
        <WhoAmIWrapper id="who">
            <LeftBlankBlock />
            <IAmWrapper>
                <MyImage>
                    <span>
                        <img src={MY_FACE_IMG} alt="MyFace" />
                    </span>
                </MyImage>
                <MYDes>
                    <h2>Who is Hyun(xtring)</h2>
                    <div />
                    <h1>Front End Developer</h1>
                    <p>
                        안녕하세요👋🏻 황현(Hwang Hyun; xtring)입니다. 아름다운
                        UX/UI를 만들어내는 것이 즐거운 Front-end
                        Developer입니다. <br />
                        <br />
                        <strong>
                            &ldquo;세상을 보고 무수한 장애물을 넘어 벽을 허물고
                            더 가까이 다가가, 서로를 알아가고 느끼는 것, 그것이
                            바로 우리가 살아가는 인생의 목적이다.&ldquo;
                        </strong>
                        <br />
                        <small>
                            - 영화 &apos;윌터의 상상은 현실이 된다&apos;
                        </small>
                        <br />
                        <br />
                        소프트웨어를 통해 비즈니스가 부딪히는 장벽을 허물고
                        사용잘들에게 한발자국 더 다가야겠다는 생각을
                        만들어주었습니다.사용성과 아름다움을 고려한 UX/UI를 통해
                        더 나은 서비스로 비즈니스 개발에 함께하고 싶습니다.
                        🧑🏻‍💻
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
