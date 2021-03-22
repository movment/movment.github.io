import React from 'react';
import styled from 'styled-components';
import Bar from '../common/Bar';
import Heading from '../common/Heading';
import Hr from '../common/Hr';
import Quote from '../common/Quote';
import Section from './Section';
import Fade from 'react-reveal/Fade';

const Block = styled.div`
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: 30px;
  @media (max-width: 767px) {
    /* justify-content: space-between; */
  }
`;
const Wrapper = styled.div`
  padding-left: 60px;
  padding-right: 60px;
  @media (max-width: 1023px) {
    padding: 0 20px;
  }
`;
const Key = styled.div`
  font-size: 1.2rem;

  width: 50%;
  @media (max-width: 1023px) {
  }
`;

const Stack = () => {
  return (
    <Section>
      <Heading size="1.875em">📚 Skills</Heading>
      <Hr />
      <Block>
        <Quote>
          다룰 수 있는 <b>기술/언어</b>입니다.
        </Quote>
        <Fade bottom>
          <Wrapper>
            <Container>
              <Key>JavaScript</Key>
              <Bar
                percent="80%"
                color="linear-gradient(90deg,#cc5285,#e0aaf2)"
              />
            </Container>
            <Container>
              <Key>React</Key>
              <Bar
                percent="80%"
                color="linear-gradient(90deg,#7ea1e5,#aaaaf2)"
              />
            </Container>
            <Container>
              <Key>Redux</Key>
              <Bar
                percent="80%"
                color="linear-gradient(90deg,#f2bcaa,#a87ee5)"
              />
            </Container>
            <Container>
              <Key>GraphQL</Key>
              <Bar
                percent="65%"
                color="linear-gradient(90deg,#cc5285,#e57e88)"
              />
            </Container>
            <Container>
              <Key>Node / Express</Key>
              <Bar
                percent="80%"
                color="linear-gradient(90deg,#7ea1e5,#a87ee5)"
              />
            </Container>

            <Container>
              <Key>Sequelize / Typeorm</Key>
              <Bar percent="75%" />
            </Container>
            <Container>
              <Key>MySQL</Key>
              <Bar
                percent="70%"
                color="linear-gradient(90deg,#e57e88,#cc5285)"
              />
            </Container>
          </Wrapper>
        </Fade>
      </Block>
    </Section>
  );
};

export default Stack;
