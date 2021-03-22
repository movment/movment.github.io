import React from 'react';
import styled from 'styled-components';
import Heading from '../common/Heading';
import Hr from '../common/Hr';
import Project from '../common/Project';
import Quote from '../common/Quote';
import Section from './Section';

const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

const Projects = () => {
  const diSlack = {
    title: 'diSlack',
    notion:
      'https://www.notion.so/diSlack-with-Crong-c8c8e01b36d14ead84d38aa6066577ed',
    content: '다양한 사람들과 소통을 할 수 있는 플랫폼입니다.',
    did: [
      'RESTful API 개발',
      'DB 스키마 정의',
      'Authentication 구현',
      'WebSocket으로 실시간 채팅 기능 구현',
      '메일로 초대 링크 보내는 기능 구현',
    ],
    stack: [
      'React',
      'Node / Express',
      'WebSocket',
      'Sequelize / MySQL',
      'AWS S3, EC2, RDS',
    ],
    imgSrc: '/diSlack.png',
    gitHub: {
      client: 'https://github.com/movment/diSlack_client',
      server: 'https://github.com/movment/diSlack_server',
    },
  };
  const bookHunt = {
    title: 'BookHunt',
    content: '책들을 검색하고 리뷰를 남길 수 플랫폼입니다.',
    imgSrc: 'BookHunt.png',
    did: [
      '풀스택 1인 개발',
      'Pagenation, Modal, 검색 Highlight 기능 구현',
      'GraphQL API 개발',
      'Social Login 구현',
      '크롤링',
    ],
    stack: [
      'TypeScript',
      'React',
      'Node',
      'Graphql, Apollo',
      'TypeORM / MySQL',
      'Styled-Components',
    ],
    gitHub: {
      client: 'https://github.com/movment/bookhunt-client',
      server: 'https://github.com/movment/bookhunt-server',
    },
  };

  return (
    <Section>
      <Heading size="1.875em">🌎 Web Projects</Heading>
      <Hr />
      <Block>
        <Quote>
          공부하면서 만든 <b>팀/개인 프로젝트</b>입니다.
        </Quote>
        <Project {...bookHunt} />
        <Project {...diSlack} />
      </Block>
    </Section>
  );
};

export default Projects;
