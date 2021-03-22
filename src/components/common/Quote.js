import React from 'react';
import styled from 'styled-components';

const StyledQuote = styled.div`
  width: 100%;
  /* height: 56px; */
  background: ${({ color }) => (color ? color : 'rgba(235, 236, 237, 0.3)')};
  padding: 16px;
  margin: 4px 0;
`;

const Quote = ({ children, color }) => {
  return <StyledQuote color={color}>💡 {children}</StyledQuote>;
};

export default Quote;
