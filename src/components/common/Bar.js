import React from 'react';
import styled from 'styled-components';

const Default = styled.div`
  /* position: relative; */
  border-radius: 7px;
  width: 100%;
  height: 20px;
  background-color: rgba(50, 50, 50, 0.05);
  @media (max-width: 1023px) {
    width: 70%;
  }
`;
const Percentage = styled.div`
  border-radius: 7px;
  position: relative;
  left: 0;
  top: 0;
  z-index: 1000;
  width: ${({ percent }) => (percent ? percent : '50%')};
  height: 20px;
  background: ${({ color }) =>
    color ? color : 'linear-gradient(90deg, #b852cc, #cc5285)'};
`;

const Bar = ({ color, percent }) => {
  return (
    <Default>
      <Percentage color={color} percent={percent} />
    </Default>
  );
};

export default Bar;
