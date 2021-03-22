import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  padding: 70px 96px;

  /* margin-top: 80px; */
  @media (max-width: 576px) {
    padding: 20px 10px;
  }
  @media (max-width: 1023px) {
    padding: 40px;
  }
`;
const Section = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Section;
