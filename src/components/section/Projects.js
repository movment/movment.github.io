import React from 'react';
import styled from 'styled-components';
import Heading from '../common/Heading';
import Hr from '../common/Hr';
import Project from '../common/Project';
import Quote from '../common/Quote';
import Section from './Section';
import projects from '../../project';

const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

const Projects = () => {
  const { bookHunt, diSlack, tweet } = projects;

  return (
    <Section>
      <Heading size="1.875em">🌎 Web Projects</Heading>
      <Hr />
      <Block>
        <Quote>
          공부하면서 만든 <b>팀/개인 프로젝트</b>입니다.
        </Quote>
        <Project {...tweet} />
        <Project {...bookHunt} />
        <Project {...diSlack} />
      </Block>
    </Section>
  );
};

export default Projects;
