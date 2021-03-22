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
  width: 70%;
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
  @media (max-width: 576px) {
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
            웹사이트들을 보며 ‘나도 저런 사이트를 만들고 싶다.’라고 생각하며
            웹에 호기심을 갖게 되었습니다.
            <br />
            현재 풀스택 개발자를 목표로 리액트와 노드로 프로젝트를 진행하면서
            해당 역량을 키워오고 있습니다.
          </Block>
          <Block>
            어떤 문제를 만나면 어렵다고 포기하는 것이 아니라, 고민하고 나름의
            해결책을 만들어 실패를 극복해 나가고 있습니다.
            <br />
            좋아하는 일을 즐기면서 잘 하는 것, 제가 꿈꾸는 저의 모습입니다.
          </Block>
        </BlockContinaer>
      </Container>
    </Section>
  );
};

export default About;
