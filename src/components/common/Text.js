import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
  max-width: 100%;
  width: 100%;
  font-size: 16px;
  line-height: 1.5;
  padding: 3px 2px;
  color: rgb(55, 53, 47);
`;
const Text = ({ children }) => {
  return <StyledText>{children}</StyledText>;
};

export default Text;
