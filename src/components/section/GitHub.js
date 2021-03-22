import React from 'react';
import styled from 'styled-components';
import Heading from '../common/Heading';
import Hr from '../common/Hr';
import Quote from '../common/Quote';
import Url from '../common/Url';

const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

const GitHub = () => {
  const data = {
    title: 'movment - Overview',
    text: `Dismiss Sign up for your own profile on GitHub, the best place to host code, manage projects, and build software alongside 40 million developers. Sign up Popular repositories Apr May Jun Jul Aug Sep Oct Nov Dec Jan Feb Mar Apr Mon Wed Fri Created 1 commit in 1 repository You can't perform that action at this time.`,
    link: 'https://github.com/movment',
    ico: '/github.ico',
    img: 'https://avatars0.githubusercontent.com/u/50521449?s=400&v=4',
  };
  return (
    <div>
      <Heading size="1.875em">🐙 GitHub</Heading>
      <Hr />
      <Block>
        <Quote color="white">
          개인/팀 프로젝트를 진행하고 있는 <b>GitHub</b> 계정입니다.
        </Quote>
        <Url {...data} />
      </Block>
    </div>
  );
};

export default GitHub;
