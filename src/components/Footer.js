import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  height: 300px;
  padding: 50px;
  background-color: #2c3e50;
  @media (max-width: 787px) {
    padding: 16px;
  }
`;
const Heading = styled.div`
  font-size: 3rem;
  margin-bottom: 40px;
  color: inherit;
`;
const Contact = styled.div`
  width: 100%;
  color: white;
`;
const Container = styled.div`
  justify-content: space-between;
  color: inherit;
`;
// const Comment = styled.div`
//   margin-bottom: 30px;
//   color: inherit;
// `;
const Info = styled.div`
  color: inherit;
  & > span {
    color: white;
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <Contact>
        <Heading size="3.5rem">CONTACT ME</Heading>
        <Container>
          {/* <Comment>
            편하게 연락주시기 바랍니다.
            <br />
            항상 다양한 의견을 듣고 배우겠습니다.
          </Comment> */}
          <Info>
            <span>Email:&nbsp;&nbsp;</span>
            <span>doinki94@gmail.com</span>
            <br />
            <span>Phone:&nbsp;&nbsp;</span>
            <span>010-9541-0101</span>
          </Info>
        </Container>
      </Contact>
    </StyledFooter>
  );
};

export default Footer;
