import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  height: 264px;

  padding: 0 96px;
`;
const Emoji = styled.div`
  margin: 4px 0;
  font-size: 68px;
`;
const Title = styled.h1`
  margin: 4px 0;
  font-size: 40px;
  font-weight: bold;
`;
const Header = () => {
  return (
    <Wrapper>
      <Emoji>🖥️</Emoji>
      <Title>Hello, World!</Title>
    </Wrapper>
  );
};

export default Header;
