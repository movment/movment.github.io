import React from 'react';
import styled from 'styled-components';
import Hr from '../common/Hr';
import Section from './Section';

const Block = styled.div`
  display: flex;
  width: 40%;
  line-height: 1.75;
  font-size: 1.125rem;
  margin: 0 50px;
  margin-top: 1.75rem;
  @media (max-width: 1023px) {
    width: 100%;
    margin: 0;
    padding: 20px;
  }
  @media (max-width: 576px) {
    width: 100%;
    margin: 0;
    padding: 20px;
  }
`;
const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.25rem;
  font-weight: 600;
`;
const Container = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  width: 90%;
  /* height: 400px; */
  @media (max-width: 576px) {
    width: 100%;
  }
  @media (max-width: 1023px) {
    width: 100%;
  }
`;
const BlockContinaer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 686px) {
    flex-direction: column;
  }
`;
const About = () => {
  return (
    <Section>
      <Container>
        <Heading>💭 About me</Heading>
        <Hr />
        <BlockContinaer>
          <Block>
            처음에는 단순히 ‘이런 프로그램이 있었으면 좋겠다’라는 생각에서 ‘내가
            한번 만들어 보면 어떨까?’라는 생각으로 직접 개발을 해보기로
            했습니다. 단순한 프로그램이였지만 제 생각을 논리적으로 구현한
            프로그램이 정상적으로 동작하는 모습을 보았을 때 개발에 재미를 느끼
            게 됐습니다
            <br /> 현재 풀스택 개발자를 목표로 리액트와 노드로 프로젝트를
            진행하면서 해당 역량을 키워오고 있습니다.
          </Block>
          <Block>
            저는 어떤 문제를 만나면 어렵다고 포기하는 것이 아니라, 고민하고
            나름의 해결책을 만들어 실패를 극복해 나가고 있습니다.
            <br />
            또한 새로운 기술에 관심이 많고 그것을 배워 다양한 곳에 적용하려고
            합니다. 반복되는 코 드를 줄이고 비효율적인 로직을 개선하기 위해
            고민하고 또 노력합니다.
          </Block>
        </BlockContinaer>
      </Container>
    </Section>
  );
};

export default About;
