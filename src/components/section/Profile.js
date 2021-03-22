import React from 'react';
import styled from 'styled-components';
import Heading from '../common/Heading';
import Hr from '../common/Hr';
import Text from '../common/Text';
import Section from './Section';

const Block = styled.div`
  display: flex;
  align-items: center;
`;
const Face = styled.img`
  width: 125px;
  height: 165px;
  margin-right: 20px;
`;

const Profile = () => {
  return (
    <Section>
      <Heading size="1.875em">🎓 Profile</Heading>
      <Hr />
      <Block>
        <Face src="/itsme.jpg" alt="face" />
        <div>
          <div>
            <Heading size="1.5em">김동인</Heading>
            <Text>연세대학교 미래캠퍼스 컴퓨터공학</Text>
            <Text>학점: 3.97 / 4.5</Text>
          </div>
          <div>
            <Heading size="1.5em">연락처</Heading>
            <Text>010-9541-0101</Text>
            <Text>doinki94@gmail.com</Text>
          </div>
        </div>
      </Block>
    </Section>
  );
};

export default Profile;
