import React from 'react';
import {
    ExperienceWrapper,
    ExperienceCardWrapper,
    ExperienceBackground,
    ExperienceContent,
} from './Atoms';

const Experience: React.FC = () => {
    return (
        <ExperienceWrapper id="experience">
            <ExperienceBackground>
                <ExperienceCardWrapper>
                    <h2>원광대학교 컴퓨터공학과</h2>
                    <ExperienceContent>
                        <img
                            src="/images/experience/wonkwang.jpg"
                            alt="wonkwang_logo"
                        />
                        <span>
                            <h1>
                                컴퓨터공학과 전공(학사) 2013년 - 2019년 졸업
                            </h1>
                            <ul>
                                <li>
                                    - 원광대학교 컴퓨터공학과를 전공하여
                                    컴퓨터공학의 전반적인 기초지식을
                                    학습했습니다. 사용자 UX에 관심이 많이 사이드
                                    프로젝트를 진행할 때 마다 Front End 개발을
                                    맡아 개발했으며 서비스를 개발하고 운영하는
                                    과정이 즐거웠습니다.
                                </li>
                                <li>
                                    - Team &ldquo;Thirty&ldquo; : Front-end
                                    Developer
                                </li>
                                <li>
                                    - 학술동아리 : 아티니어(Artineer) 프로젝트 :
                                    공우리(원광대학교 창의공과대학 길찾기
                                    시스템), 원광대학교 컴퓨터소프트웨어공학과
                                    동아리 아티니어 웹페이지
                                </li>
                            </ul>
                        </span>
                    </ExperienceContent>
                </ExperienceCardWrapper>
                <ExperienceCardWrapper>
                    <h2>석세스모드 SUCCESSMODE</h2>
                    <ExperienceContent>
                        <img
                            src="/images/experience/successmode.png"
                            alt="successmode_logo"
                        />
                        <span>
                            <h1>2019년 10월 - 2020년 12월 | 13개월</h1>
                            <h3>React, React Native를 기반으로 웹/앱을 개발</h3>
                            <h3>PhotoSend(iOS)</h3>
                            <ul>
                                <li>
                                    - &quot;여행 프리미엄 쇼핑 서비스.
                                    사고싶은데 부피가 크거나 시간이 없다면
                                    사진만 찍어두세요. 머무르는 호텔, 공항,
                                    당신의 집까지 배송 해드립니다.&quot;
                                </li>
                                <li>
                                    - 개발 기간 : 2달(서비스 초기 개발 및
                                    유지보수)
                                </li>
                                <li>
                                    - Skill Keyword : React Native / Redux /
                                    Push Notification / Localizing(i18n Manager)
                                    / iOS
                                </li>
                            </ul>
                            <h3>TourCash(iOS/Android)</h3>
                            <ul>
                                <li>
                                    - 한국 여행 필수품! TOURCASH 카드 한 장 이면
                                    &quot;내가 가는 모든 곳이 면세점&quot;
                                </li>
                                <li>
                                    - 개발 기간 : 2달(서비스 초기 개발 및
                                    유지보수)
                                </li>
                                <li>
                                    - iOS/Android 출시(각 플랫폼의 UX 특징을
                                    고려하여 개발)
                                </li>
                                <li>
                                    - Skill Keyword : React Native / Redux /
                                    Push Notification / Chatting Service / iOS /
                                    Android
                                </li>
                            </ul>
                            <h3>Daily8(iOS/Android)</h3>
                            <ul>
                                <li>- 매일 8개의 관심 상품을 추천 받으세요!</li>
                                <li>
                                    - iOS/Android 출시(각 플랫폼의 UX 특징을
                                    고려하여 개발)
                                </li>
                                <li>
                                    - Skill Keyword : React Native / Functional
                                    Component / React hooks / Local Push
                                    Notification / Chatting Service / iOS /
                                    Android
                                </li>
                            </ul>
                            <h3>Web</h3>
                            <ul>
                                <li>
                                    - React.js, styled-components, React hook
                                </li>
                                <li>
                                    - 서비스 랜딩 페이지 개발(접속 시 모바일과
                                    PC를 구분하여 Redirection)
                                </li>
                                <li>- TourCash Admin(In-house) page 개발</li>
                            </ul>
                        </span>
                    </ExperienceContent>
                </ExperienceCardWrapper>
                <ExperienceCardWrapper>
                    <h2>네오플렛 neoflat</h2>
                    <ExperienceContent>
                        <img
                            src="/images/experience/neoflat.png"
                            alt="neoflat_logo"
                        />
                        <span>
                            <h3>
                                <a href="https://algo.neoflat.net/view/rentalHouse/list">
                                    알고
                                </a>
                            </h3>
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
                                <a href="https://gobang.kr/view/main">고방</a>
                            </h3>
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
                                <a href="https://westay.a.t-neoflat.net/">
                                    WESTAY
                                </a>
                            </h3>
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
                            </ul>
                        </span>
                    </ExperienceContent>
                </ExperienceCardWrapper>
            </ExperienceBackground>
        </ExperienceWrapper>
    );
};

export default Experience;
