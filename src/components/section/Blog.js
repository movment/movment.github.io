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

const Blog = () => {
  const data = {
    title: '디그다',
    text: `robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318 Index as a key is an anti-pattern So many times I have seen developers use the index of an item as its key when they render a list. robinpokorny.medium.com 개발자가 리스트를 렌더링 할 때 index를 키로 사용하는 것을 여러 번 보았다. todos.map((todo, index) => ( )); } 위 코드는 우아하게 보이고 해당 경고를 없앤다.`,
    link: 'https://movment.tistory.com',
    ico: '/tistory.ico',
    img: '/graph.png',
  };
  return (
    <div>
      <Heading size="1.875em">📓 Blog</Heading>
      <Hr />
      <Block>
        <Quote color="white">
          개발, 일상 등을 올리는 <b>블로그</b>입니다.
        </Quote>
        <Url {...data} />
      </Block>
    </div>
  );
};

export default Blog;
