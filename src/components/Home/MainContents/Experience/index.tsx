import React from 'react';
import { TextLink } from '../../../Atoms';
import {
    ExperienceWrapper,
    ExperienceHeader,
    ExperienceCardWrapper,
    ExperienceContent,
    ExperienceCardHeader,
} from './Atoms';
import ImageSlide from '../../../Common/ImageSlide';

const tourcash_imgList = [
    '/images/experience/tourcash_1.jpeg',
    '/images/experience/tourcash_2.jpeg',
    '/images/experience/tourcash_3.jpeg',
    '/images/experience/tourcash_4.jpeg',
    '/images/experience/tourcash_5.jpeg',
];

const phsend_imgList = [
    '/images/experience/phsend_1.jpeg',
    '/images/experience/phsend_2.jpeg',
    '/images/experience/phsend_3.jpeg',
    '/images/experience/phsend_4.jpeg',
    '/images/experience/phsend_5.jpeg',
    '/images/experience/phsend_6.jpeg',
];

const d8_imgList = [
    '/images/experience/d8_1.jpeg',
    '/images/experience/d8_2.jpeg',
    '/images/experience/d8_3.jpeg',
    '/images/experience/d8_4.jpeg',
    '/images/experience/d8_5.jpeg',
];

const Experience: React.FC = () => {
    return (
        <ExperienceWrapper id="experience">
            <ExperienceHeader>
                <h1>Experiences</h1>
                <div />
            </ExperienceHeader>
            <ExperienceCardWrapper>
                <ExperienceCardWrapper>
                    <ExperienceCardHeader>
                        <img
                            src="/images/experience/neoflat.png"
                            alt="neoflat_logo"
                        />
                        <div>
                            <h2>
                                <TextLink href="https://www.notion.so/gito/fad27e9cbf7643e3ad7b138c219818cf">
                                    네오플렛 neoflat
                                </TextLink>
                            </h2>
                            <h3>2020년 12월 - 재직중</h3>
                            <h3>가벼운 주거를 위한 서비스를 개발</h3>
                        </div>
                    </ExperienceCardHeader>
                    <ExperienceContent>
                        <span>
                            <h3>
                                <TextLink href="https://algo.neoflat.net/view/rentalHouse/list">
                                    알고
                                </TextLink>
                            </h3>
                            <img src="/images/experience/algo.png" alt="algo" />
                            <ul>
                                <li>
                                    - JavaScript, JQuery를 이용하여 웹/앱(iOS)을
                                    개발했습니다.
                                </li>
                                <li>
                                    - Spring 기반의 웹 어플리케이션으로 모놀로틱
                                    아키텍처로 구성된 프로젝트입니다.
                                </li>
                                <li>
                                    - 주로 메인과 임대주택 필터 부분을 주로 개발
                                </li>
                            </ul>
                            <h3>
                                <TextLink href="https://gobang.kr/view/main">
                                    고방
                                </TextLink>
                            </h3>
                            <img
                                src="/images/experience/gobang.png"
                                alt="gobang"
                            />
                            <ul>
                                <li>
                                    - JavaScript, JQuery를 이용하여 웹/앱(iOS)을
                                    개발했습니다.
                                </li>
                                <li>
                                    - Spring 기반의 웹 어플리케이션으로 모놀로틱
                                    아키텍처로 구성된 프로젝트입니다.
                                </li>
                                <li>- 직거래, 임대주택 부분을 주로 개발</li>
                            </ul>
                            <h3>Station</h3>
                            <span>
                                * 사내 어드민 페이지로 공개할 수 있는 정보가
                                없습니다.
                            </span>
                            <ul>
                                <li>
                                    - 네오플랫의 클라이언트 사이드 서비스를
                                    관리하는 백오피스 어플리케이션
                                </li>
                                <li>
                                    - React(CRA), React hook, Antd, Responsive
                                    Web
                                </li>
                                <li>- 프로젝트 전반을 개발</li>
                            </ul>
                            <h3>
                                <TextLink href="https://westay.a.t-neoflat.net/">
                                    WESTAY
                                </TextLink>
                            </h3>
                            <div>
                                <img
                                    src="/images/experience/westay.png"
                                    alt="westay"
                                />
                                <img
                                    src="/images/experience/westay2.png"
                                    alt="westay2"
                                />
                                <img
                                    src="/images/experience/westay3.png"
                                    alt="westay3"
                                />
                            </div>

                            <ul>
                                <li>
                                    - 네오플랫의 전반적인 공간정보를 한눈에 볼
                                    수 있는 서비스로 단기 임대 공간을
                                    중개합니다.
                                </li>
                                <li>
                                    - Next.js(SSR), React hook, SWR, emotion,
                                    Antd, Responsive Web, zPWA
                                </li>
                                <li>
                                    - SSR 기반의 개발을 통해 기존 CRA에서의
                                    퍼포먼스, SEO 이슈를 명쾌하게 해결할 수
                                    있었습니다.
                                </li>
                                <li>- Client side 전반을 책임지고 개발</li>
                                <li>- 현재 개발 진행중</li>
                            </ul>
                        </span>
                    </ExperienceContent>
                </ExperienceCardWrapper>
            </ExperienceCardWrapper>
            <ExperienceCardWrapper>
                <ExperienceCardHeader>
                    <img
                        src="/images/experience/successmode.png"
                        alt="successmode_logo"
                    />
                    <div>
                        <h2>
                            <TextLink href="https://www.successmode.co.kr/about">
                                석세스모드 SUCCESSMODE
                            </TextLink>
                        </h2>
                        <h3>2019년 10월 - 2020년 12월 | 13개월</h3>
                        <h3>React, React Native를 기반으로 웹/앱을 개발</h3>
                    </div>
                </ExperienceCardHeader>
                <ExperienceContent>
                    <span>
                        <h3>
                            <TextLink href="https://appadvice.com/app/photosend/1491157337">
                                PhotoSend(iOS)
                            </TextLink>
                        </h3>
                        <img
                            src="/images/experience/photosend.png"
                            alt="photosend"
                        />
                        <ImageSlide imgList={phsend_imgList} />
                        <ul>
                            <li>
                                - &quot;여행 프리미엄 쇼핑 서비스. 사고싶은데
                                부피가 크거나 시간이 없다면 사진만 찍어두세요.
                                머무르는 호텔, 공항, 당신의 집까지 배송
                                해드립니다.&quot;
                            </li>
                            <li>
                                - 개발 기간 : 2달(서비스 초기 개발 및 유지보수)
                            </li>
                            <li>
                                - Skill Keyword : React Native / Redux / Push
                                Notification / Localizing(i18n Manager) / iOS
                            </li>
                        </ul>

                        <h3>
                            <TextLink href="https://appadvice.com/app/tourcash/1515070189">
                                TourCash(iOS/Android)
                            </TextLink>
                        </h3>
                        <img
                            src="/images/experience/tourcash.png"
                            alt="tourcash"
                        />
                        <ImageSlide imgList={tourcash_imgList} />
                        <ul>
                            <li>
                                - 한국 여행 필수품! TOURCASH 카드 한 장 이면
                                &quot;내가 가는 모든 곳이 면세점&quot;
                            </li>
                            <li>
                                - 개발 기간 : 2달(서비스 초기 개발 및 유지보수)
                            </li>
                            <li>
                                - iOS/Android 출시(각 플랫폼의 UX 특징을
                                고려하여 개발)
                            </li>
                            <li>
                                - Skill Keyword : React Native / Redux / Push
                                Notification / Chatting Service / iOS / Android
                            </li>
                        </ul>

                        <h3>
                            <TextLink href="https://appadvice.com/app/daily8/1526626121">
                                Daily8(iOS/Android)
                            </TextLink>
                        </h3>
                        <img src="/images/experience/daily8.png" alt="daily8" />
                        <ImageSlide imgList={d8_imgList} />
                        <ul>
                            <li>- 매일 8개의 관심 상품을 추천 받으세요!</li>
                            <li>
                                - iOS/Android 출시(각 플랫폼의 UX 특징을
                                고려하여 개발)
                            </li>
                            <li>
                                - Skill Keyword : React Native / Functional
                                Component / React hooks / Local Push
                                Notification / Chatting Service / iOS / Android
                            </li>
                        </ul>
                        <h3>Web</h3>
                        <ul>
                            <li>- React.js, styled-components, React hook</li>
                            <li>
                                - 서비스 랜딩 페이지 개발(접속 시 모바일과 PC를
                                구분하여 Redirection)
                            </li>
                            <li>- TourCash Admin(In-house) page 개발</li>
                        </ul>
                    </span>
                </ExperienceContent>
            </ExperienceCardWrapper>
            <ExperienceCardWrapper>
                <ExperienceCardHeader>
                    <img
                        src="/images/experience/wonkwang.png"
                        alt="wonkwang_logo"
                    />
                    <div>
                        <h2>원광대학교 컴퓨터공학과</h2>
                        <h3>2013년 - 2019년 졸업</h3>
                        <h3>컴퓨터공학과 전공(학사)</h3>
                    </div>
                </ExperienceCardHeader>
                <ExperienceContent>
                    <span>
                        <ul>
                            <li>
                                - 원광대학교 컴퓨터공학과를 전공하여
                                컴퓨터공학의 전반적인 기초지식을 학습했습니다.
                                사용자 UX에 관심이 많이 사이드 프로젝트를 진행할
                                때 마다 Front End 개발을 맡아 개발했으며
                                서비스를 개발하고 운영하는 과정이 즐거웠습니다.
                            </li>
                            <li>
                                - Team &ldquo;Thirty&ldquo; : Front-end
                                Developer
                            </li>
                            <li>
                                - 학술동아리 : 아티니어(Artineer) 프로젝트 :
                                <TextLink href="https://github.com/hyun940630/GongWooli-campus-guide">
                                    공우리(원광대학교 창의공과대학 길찾기
                                    시스템)
                                </TextLink>
                                ,{' '}
                                <TextLink href="http://artineer.net/index.php">
                                    원광대학교 컴퓨터 소프트웨어공학과 동아리
                                    아티니어 웹페이지
                                </TextLink>
                            </li>
                        </ul>
                    </span>
                </ExperienceContent>
            </ExperienceCardWrapper>
        </ExperienceWrapper>
    );
};

export default Experience;
