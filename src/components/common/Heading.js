import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  padding: 4px;
  font-size: ${(props) => props.size};
  font-weight: 600;
`;
const Heading = ({ children, size, style }) => {
  return (
    <StyledHeading size={size} style={style}>
      {children}
    </StyledHeading>
  );
};

export default Heading;
