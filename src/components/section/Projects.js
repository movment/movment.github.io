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
      <Heading size="1.875em">π Web Projects</Heading>
      <Hr />
      <Block>
        <Quote>
          κ³΅λΆνλ©΄μ λ§λ  <b>ν/κ°μΈ νλ‘μ νΈ</b>μλλ€.
        </Quote>
        <Project {...tweet} />
        <Project {...bookHunt} />
        <Project {...diSlack} />
      </Block>
    </Section>
  );
};

export default Projects;
