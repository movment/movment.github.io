import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* padding: 0 96px; */
`;
const Main = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Main;
