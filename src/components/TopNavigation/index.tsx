import { Link } from 'react-scroll';
import { TopNavigationWrapper, TopNavigationContainer, Category, SNSLinks } from './Atoms';
import I_IMAGE from 'assets/images/i.png';

const SCROLL_DURATION = 100;

const TopNavigation: React.FC = () => {
  return (
    <TopNavigationWrapper>
      <TopNavigationContainer>
        <Category>
          <Link to="top" spy smooth duration={SCROLL_DURATION}>
            <img src={I_IMAGE} alt="me" />
          </Link>
          <li>
            <a href="#who">Who is Hyun?</a>
          </li>
          <li>
            <a href="#skills">skills</a>
          </li>
          <li>
            <a href="#experience">Experiences</a>
          </li>
        </Category>
        <SNSLinks>
          <li>
            <a href="https://github.com/hyun940630">Github</a>
          </li>
          <li>
            <a href="https://xtring-dev.tistory.com/">Blog</a>
          </li>
          <li>
            <a href="https://www.instagram.com/x6tri3n0g/">Insta</a>
          </li>
          <li>
            <a href="https://www.facebook.com/hhyun06/">FB</a>
          </li>
        </SNSLinks>
      </TopNavigationContainer>
    </TopNavigationWrapper>
  );
};

export default TopNavigation;
