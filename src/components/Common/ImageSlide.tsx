import React from 'react';
import styled from 'styled-components';

interface ImageSlideProps {
    imgList: string[];
}

const ImageSlide: React.FC<ImageSlideProps> = ({
    imgList,
}: ImageSlideProps) => {
    return (
        <ImageSlideWrapper>
            {imgList.map((item, i) => (
                <ImageContainer key={i} src={item} alt="img" />
            ))}
        </ImageSlideWrapper>
    );
};

const ImageSlideWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 260px;
    height: 288px;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const ImageContainer = styled.img`
    width: 100px;
`;

export default ImageSlide;
