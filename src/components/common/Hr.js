import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 13px;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid rgba(55, 53, 47, 0.09);
`;
const Hr = () => {
  return (
    <Wrapper>
      <Line />
    </Wrapper>
  );
};

export default Hr;
