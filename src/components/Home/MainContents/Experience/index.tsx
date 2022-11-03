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
        <ExperienceCardHeader>
          <img src="/images/experience/kurly.jpg" alt="kurly_logo" />
          <div>
            <h2>
              컬리 Kurly - 마켓컬리/뷰티컬리
              <TextLink href="https://www.kurly.com/main">바로가기</TextLink>
            </h2>
            <h3>2021년 11월 - 재직중</h3>
            <h3>사용자가 편리한 UX/UI를 통해 Love Food, Love Life.를 할 수 있도록 만듭니다.</h3>
            <h3>Front-end Developer</h3>
          </div>
        </ExperienceCardHeader>
        <ExperienceContent>
          <span>
            <h3>
              컬리몰 - 상품상세
              <TextLink href="https://www.kurly.com/goods/5000491">바로가기</TextLink>
            </h3>
            <div className="image_group">
              <img src="/images/experience/kurly_avocado_pc.png" alt="PC_상품상세_아보카도" />
              <img src="/images/experience/kurly_avocado_mw.png" alt="MW_상품상세_아보카도" />
            </div>
            <ul>
              <li>- Next.js 전환작업</li>
              <li>- 상품, 회원, 주문팀 백엔드 팀과 협업</li>
              <li>- 앱팀과 WebView/WebKit를 통한 앱/웹 간 통신 인터페이스 개발</li>
              <li>- 컬리 상품의 정책 사항 적용</li>
            </ul>
            <h3>컬리몰 SEO</h3>
            <ul>
              <li>- 네이버 및 구글 SEO를 위한 작업</li>
              <li>- meta description / JSON+LD / Site Map</li>
              <li>- 글로벌한 SEO한 작업 진행</li>
            </ul>
            <h3>컬리몰 PWA</h3>
            <ul>
              <li>
                - 완전한 StandAlone한 앱을 통해서 유저는 웹을 앱과 같은 UX를 경험할 수 있도록 함
              </li>
            </ul>
            <h3>커머스 조직문화 개선</h3>
            <ul>
              <li>- 개발 문화 개선을 위한 TF팀에 참여</li>
              <li>- 매주 커머스 개발 조직의 개발 문화 개선을 위해 논의하며 액션 아이템을 설정함</li>
              <li>- 컬리 코드 진행</li>
            </ul>
          </span>
        </ExperienceContent>
      </ExperienceCardWrapper>
      <ExperienceCardWrapper>
        <ExperienceCardHeader>
          <img src="/images/experience/neoflat.png" alt="neoflat_logo" />
          <div>
            <h2>
              네오플렛 neoflat
              <TextLink href="https://www.notion.so/gito/fad27e9cbf7643e3ad7b138c219818cf">
                바로가기
              </TextLink>
            </h2>
            <h3>2020년 12월 - 재직중 | 10개월</h3>
            <h3>가벼운 주거/머묾를 위한 서비스 개발</h3>
            <h3>Software Developer</h3>
          </div>
        </ExperienceCardHeader>
        <ExperienceContent>
          <span>
            <h3>
              알고
              <TextLink href="https://algo.neoflat.net/view/rentalHouse/list">바로가기</TextLink>
            </h3>
            <img src="/images/experience/algo.png" alt="algo" />
            <ul>
              <li>
                - 서비스 &apos;알고&apos;는 기존 어색하고 딱딱하기만 했던 공고들을 지역 및 필터로
                조회하여 원하는 임대주택 공고를 찾을 수 있게 도와줍니다. 관심지역을 설정하면 그
                지역에 관련된 알림을 받을 수 있습니다.
              </li>
              <li>- Spring, JSP, JQuery</li>
              <li>
                - Spring 기반의 웹 어플리케이션으로 모놀로식 아키텍처로 구성된 프로젝트입니다.
              </li>
              <li>- 개발 사항 : 메인 화면, 임대주택 필터 및 알림 개발 / iOS 앱 유지보수 및 개발</li>
            </ul>
            <h3>
              고방
              <TextLink href="https://gobang.kr/view/main">바로가기</TextLink>
            </h3>
            <img src="/images/experience/gobang.png" alt="gobang" />
            <ul>
              <li>
                - 서비스 &apos;고방&apos;은 가벼운 주거를 소개하는 플랫폼입니다. 고시원, 쉐어하우스,
                직거래, 임대주택 관련 정보를 한눈에 볼 수 있습니다.
              </li>
              <li>- Spring, JSP, JQuery</li>
              <li>
                - Spring 기반의 웹 어플리케이션으로 모놀로식 아키텍처로 구성된 프로젝트입니다.
              </li>
              <li>- 개발 사항 : 직거래, 임대주택 개발 / iOS 앱 유지보수 및 개발</li>
            </ul>
            <h3>Station</h3>
            <span>* 사내 어드민 페이지로 공개할 수 있는 정보가 없습니다.</span>
            <ul>
              <li>
                - 네오플랫의 서비스의 유저, 임대주택 공고, 결제, 뉴스 관리를 위한 백오피스
                어플리케이션 입니다.
              </li>
              <li>- React(CRA), React hook, Antd, Responsive Web</li>
              <li>- 개발사항: 프로젝트 전반을 개발, 데이터 테이블 및 필터 개발</li>
            </ul>
            <h3>
              WESTAY
              <TextLink href="https://westay.co.kr/">바로가기</TextLink>
            </h3>
            <div>
              <img src="/images/experience/westay.png" alt="westay" />
              <img src="/images/experience/westay2.png" alt="westay2" />
              <img src="/images/experience/westay3.png" alt="westay3" />
            </div>

            <ul>
              <li>
                - 네오플랫이 운영관리하는 공간정보를 한눈에 볼 수 있는 서비스로 단기 임대/주거
                공간을 소개합니다.
              </li>
              <li>
                - Next.js(SSR), React hook, SWR, emotion, Antd, PWA, Responsive Web, Kakao
                API(Login, Map)
              </li>
              <li>
                - Next의 특징인 SSR/SSG의 pre-render를 통해 더 나은 사용성과 퍼포먼스를
                만들었습니다. SEO 최적화에 대해 알아보고 이를 적용합니다. 데스크탑과 모바일 간의
                화면 구성 방식이 매우 다르기 때문에 반응형 설계에 대해서 고민했습니다.
              </li>
              <li>- 현재 개발중에 있으며 Mobile 90%, Desktop 60% 정도 개발</li>
              <li>- 개발사항: 프로젝트 설계 및 개발</li>
            </ul>
          </span>
        </ExperienceContent>
      </ExperienceCardWrapper>
      <ExperienceCardWrapper>
        <ExperienceCardHeader>
          <img src="/images/experience/successmode.png" alt="successmode_logo" />
          <div>
            <h2>
              석세스모드 SUCCESSMODE
              <TextLink href="https://www.successmode.co.kr/about">바로가기</TextLink>
            </h2>
            <h3>2019년 10월 - 2020년 12월 | 13개월</h3>
            <h3>React, React Native를 기반으로 웹/앱을 개발</h3>
          </div>
        </ExperienceCardHeader>
        <ExperienceContent>
          <span>
            <h3>
              PhotoSend(iOS)
              <TextLink href="https://appadvice.com/app/photosend/1491157337">바로가기</TextLink>
            </h3>
            <img src="/images/experience/photosend.png" alt="photosend" />
            <ImageSlide imgList={phsend_imgList} />
            <ul>
              <li>
                - &quot;여행 프리미엄 쇼핑 서비스. 사고싶은데 부피가 크거나 시간이 없다면 사진만
                찍어두세요. 머무르는 호텔, 공항, 당신의 집까지 배송 해드립니다.&quot;
              </li>
              <li>- 개발 기간 : 2달(서비스 초기 개발 및 유지보수)</li>
              <li>
                - Skill Keyword : React Native / Redux / Push Notification / Localizing(i18n
                Manager) / iOS
              </li>
            </ul>

            <h3>
              TourCash(iOS/Android)
              <TextLink href="https://appadvice.com/app/tourcash/1515070189">바로가기</TextLink>
            </h3>
            <img src="/images/experience/tourcash.png" alt="tourcash" />
            <ImageSlide imgList={tourcash_imgList} />
            <ul>
              <li>
                - 한국 여행 필수품! TOURCASH 카드 한 장 이면 &quot;내가 가는 모든 곳이 면세점&quot;
              </li>
              <li>- 개발 기간 : 2달(서비스 초기 개발 및 유지보수)</li>
              <li>- iOS/Android 출시(각 플랫폼의 UX 특징을 고려하여 개발)</li>
              <li>
                - Skill Keyword : React Native / Redux / Push Notification / Chatting Service / iOS
                / Android
              </li>
            </ul>

            <h3>
              Daily8(iOS/Android)
              <TextLink href="https://appadvice.com/app/daily8/1526626121">바로가기</TextLink>
            </h3>
            <img src="/images/experience/daily8.png" alt="daily8" />
            <ImageSlide imgList={d8_imgList} />
            <ul>
              <li>- 매일 8개의 관심 상품을 추천 받으세요!</li>
              <li>- iOS/Android 출시(각 플랫폼의 UX 특징을 고려하여 개발)</li>
              <li>
                - Skill Keyword : React Native / Functional Component / React hooks / Local Push
                Notification / Chatting Service / iOS / Android
              </li>
            </ul>
            <h3>Web</h3>
            <ul>
              <li>- React.js, styled-components, React hook</li>
              <li>- 서비스 랜딩 페이지 개발(접속 시 모바일과 PC를 구분하여 Redirection)</li>
              <li>- TourCash Admin(In-house) page 개발</li>
            </ul>
          </span>
        </ExperienceContent>
      </ExperienceCardWrapper>
      <ExperienceCardWrapper>
        <ExperienceCardHeader>
          <img src="/images/experience/wonkwang.png" alt="wonkwang_logo" />
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
                - 원광대학교 컴퓨터공학과를 전공하여 컴퓨터공학의 전반적인 기초지식을 학습했습니다.
                사용자 UX에 관심이 많이 사이드 프로젝트를 진행할 때 마다 Front End 개발을 맡아
                개발했으며 서비스를 개발하고 운영하는 과정이 즐거웠습니다.
              </li>
              <li>- Team &ldquo;Thirty&ldquo; : Front-end Developer</li>
              <li>
                - 아티니어(Artineer, 학술동아리) 프로젝트 :
                <TextLink href="https://github.com/hyun940630/GongWooli-campus-guide">
                  공우리(원광대학교 창의공과대학 길찾기 시스템)
                </TextLink>
                ,{' '}
                <TextLink href="http://artineer.net/index.php">
                  원광대학교 컴퓨터 소프트웨어공학과 동아리 아티니어 웹페이지
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
