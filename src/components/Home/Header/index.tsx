import React from 'react';
import { HeaderWrapper } from './Atoms';

const Header: React.FC = () => {
    return (
        <HeaderWrapper id="#">
            <div>
                <span>
                    <h1>A beautiful UX/UI is needed everywhere.</h1>
                    <p>
                        사람들은 아름다운 UX/UI에 관심을 가지고 사용하는 것을
                        좋아합니다. Front-end 개발자로서 사용자가 서비스를 더욱
                        즐겁고 효율적으로 사용할 수 있도록 만드는 것이 목적이자
                        목표입니다.
                    </p>
                </span>
                {/* <span> */}
                {/* blank! 추후 여기에 기존에 작업한 이력들을 애니메이션으로
                    보여줄 예정 */}
                {/* </span> */}
            </div>
        </HeaderWrapper>
    );
};

export default Header;
