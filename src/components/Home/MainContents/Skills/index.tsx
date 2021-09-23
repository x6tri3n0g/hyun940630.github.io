import React from 'react';
import {
    SkillsWrapper,
    SkillsContents,
    SkillsCategory,
    SkillSliderWrapper,
    SkillsCardWrapper,
    SkillsTagWrapper,
} from './Atoms';

const Skills: React.FC = () => {
    return (
        <SkillsWrapper>
            <SkillsContents>
                <SkillsCategory>
                    <div>
                        <h1>Skills</h1>
                        <div />
                    </div>
                </SkillsCategory>
                <SkillSliderWrapper>
                    <SkillsCardWrapper>
                        <SkillsTagWrapper>
                            <h2>Front End</h2>
                            <li>
                                <img src="/images/skills/js.png" />
                            </li>
                            <li>
                                <img src="/images/skills/ts.png" />
                            </li>
                            <li>
                                <img src="/images/skills/react.png" />
                            </li>
                            <li>
                                <img src="/images/skills/next.png" />
                            </li>
                            <li>
                                <img src="/images/skills/rn.png" />
                            </li>
                        </SkillsTagWrapper>
                        <p>
                            <ul>
                                <li>
                                    JavaScript / TypeScript / React / Next.js /
                                    React Native / HTML / CSS
                                </li>
                                <li>
                                    - HTML과 CSS에 매우 익숙하며 디자인 시안을
                                    100% 퍼블리싱할 수 있습니다. 최근엔 CSS로
                                    60fps 애니메이션 구현하는 것에 관심을 가지고
                                    있습니다.
                                </li>
                                <li>
                                    - 2년간 실무에서 JavaScript(mainly ES6+)를
                                    사용했습니다. 가장 익숙하고 잘 사용할 수
                                    있는 언어입니다.
                                </li>
                                <li>
                                    - TypeScript는 회사에서 직접적으로 사용하진
                                    않았지만 사이드 프로젝트를 통해 스터디 및
                                    적용을 하고 있습니다.
                                </li>
                                <li>
                                    - React는 실무에서 가장 많이 사용한 Skill로
                                    상태관리로는 주로 Context API를 사용했고
                                    Redux는 거의 사용하지 않았습니다. Function
                                    컴포넌트로 작성하며 hook를 통해 로직을
                                    구현합니다.
                                </li>
                                <li>
                                    - Next.js는 최근 신규 프로젝트를 통해
                                    실무에서 직접 사용하게 되었습니다. SSR을
                                    통해 얻는 장점들을 바로 알아볼 수
                                    있었습니다.
                                </li>
                                <li>
                                    - React Native를 통해 4개의 앱을 출시한
                                    경험이 있습니다. iOS/Android 앱을 동시
                                    출시했으며 주로 i18n을 통해 다국어 지원,
                                    Notification, 쇼핑/물류/결제 관련 도메인
                                    개발을 했습니다.
                                </li>
                            </ul>
                        </p>
                    </SkillsCardWrapper>
                    <SkillsCardWrapper>
                        <SkillsTagWrapper>
                            <h2>Back End</h2>
                            <li>
                                <img src="/images/skills/spring.svg" />
                            </li>
                            <li>
                                <img src="/images/skills/mariaDB.png" />
                            </li>
                        </SkillsTagWrapper>
                        <p>
                            <ul>
                                <li>Spring Framework / MariaDB</li>
                                <li>
                                    - 딥하게 사용하진 않았지만 실무간 수정과
                                    유지보수를 한 경험이 있습니다.
                                </li>
                                <li>
                                    - 현재는 맡고 있는 도메인의 서버 API와 Query
                                    역시 작성하고 있습니다.
                                </li>
                                <li>
                                    - 작게는 학부 시절 Node.js를 사용하여 사이드
                                    프로젝트를 한 경험이 있습니다.
                                </li>
                            </ul>
                        </p>
                    </SkillsCardWrapper>
                    <SkillsCardWrapper>
                        <SkillsTagWrapper>
                            <h2>Soft Skill</h2>
                            <li>
                                <img src="/images/skills/commui.svg" />
                            </li>
                            <li>
                                <img src="/images/skills/okr.png" />
                            </li>
                            <li>
                                <img src="/images/skills/git.png" />
                            </li>
                            <li>
                                <img src="/images/skills/github.jpg" />
                            </li>
                            <li>
                                <img src="/images/skills/trello.png" />
                            </li>
                            <li>
                                <img src="/images/skills/notion.png" />
                            </li>
                        </SkillsTagWrapper>
                        <p>
                            <ul>
                                <li>
                                    Communication / OKR / git / Github / Trello
                                    / Notion
                                </li>
                                <li>
                                    - Software의 절반은 커뮤니케이션에서
                                    나온다고 생각합니다. 이해관계자와의 적절한
                                    커뮤니케이션을 통해서 업무를 정확하게 하는
                                    것을 좋아합니다.
                                </li>
                                <li>
                                    - OKR을 통해 팀이 목표에 가까워지는 경험을
                                    했으며 이를 진행하는데 무리가 없습니다.
                                </li>
                                <li>
                                    - git/Github 통해 코드 형상 유지와 Github
                                    내의 커뮤니케이션을 할 수 있습니다.
                                </li>
                                <li>
                                    - Trello를 사용하여 프로젝트 진행상황을
                                    체크하며 진행했습니다.
                                </li>
                                <li>
                                    - Notion를 사용하여 각종 문서와 데이터를
                                    정리 및 작성 해왔습니다.
                                </li>
                            </ul>
                        </p>
                    </SkillsCardWrapper>
                </SkillSliderWrapper>
            </SkillsContents>
        </SkillsWrapper>
    );
};

export default Skills;
