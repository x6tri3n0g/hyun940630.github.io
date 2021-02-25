import React, { useState, useCallback, useEffect } from 'react';
import { HeaderWrapper } from './Atoms';

const Header: React.FC = () => {
    const [isScroll, setIsScroll] = useState(false);

    const handleScroll = useCallback(() => {
        if (window.pageYOffset > 0) {
            setIsScroll(true);
        }
        if (window.pageYOffset === 0) {
            setIsScroll(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('mousewheel', handleScroll);
        return () => {
            window.removeEventListener('mousewheel', handleScroll);
        };
    }, [handleScroll]);

    return (
        <HeaderWrapper>
            <div>
                <span>
                    <h1>Anywhere you need a Beautiful UX/UI.</h1>
                    <p>
                        Hi 👋🏻 I&#39;m <strong>Hwang Hyun</strong>, a{' '}
                        <strong>Frontend Developer</strong> who likes to create
                        <strong>Beautiful UX/UI</strong>. Beautiful UX/UI is
                        needed for any service and can be entertaining for
                        anyone. I am always in this thought and worry. We want
                        to create the best service with the optimal combination
                        of business and design.
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
