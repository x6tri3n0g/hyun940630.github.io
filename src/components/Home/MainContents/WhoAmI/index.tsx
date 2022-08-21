import React from 'react';
import {
    WhoAmIWrapper,
    LeftBlankBlock,
    IAmWrapper,
    MyImage,
    Profile,
    MYDes,
    WhoAmIFigureWrapper,
    WhoAmIFigureCircle,
    WhoAmIFigureVerticalLine,
} from './Atoms';

const WhoAmI: React.FC = () => {
    return (
        <WhoAmIWrapper id="who">
            <LeftBlankBlock />
            <IAmWrapper>
                <MyImage>
                    <div>
                        <Profile imageUrl="/my_face.png" />
                    </div>
                </MyImage>
                <MYDes>
                    <h2>Who is Hyun(xtring)</h2>
                    <div />
                    <h1>Front End Developer</h1>
                    <p>
                        안녕하세요👋🏻 황현(Hwang Hyun; xtring)입니다. 아름다운
                        UX/UI를 만들어내는 것이 즐거운 Front End
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
                        소프트웨어를 통해 비즈니스가 마주하는 장벽을 허물고
                        사용자들에게 한 발자국 더 다가고 싶습니다. 많은 사람들이
                        제가 만들어낸 UI를 사용하여 즐거움과 편리함을 느낀다면
                        그보다 더 큰 성취감은 없을 것입니다. 사용성과 아름다움을
                        고려한 UX/UI를 통해 서비스와 비즈니스 개발에 함께하고
                        싶습니다. 🧑🏻‍💻
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
