import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  height: 600px;
  padding: 100px;
  /* justify-content: center; */
  background-color: #2c3e50;
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
const Comment = styled.div`
  margin-bottom: 30px;
  color: inherit;
`;
const Info = styled.div`
  color: inherit;
`;
const Footer = () => {
  return (
    <StyledFooter>
      <Contact>
        <Heading size="3.5rem">CONTACT ME</Heading>
        <Container>
          <Comment>
            제 포트폴리오를 봐주셔서 감사합니다. 문의사항이 있으시다면 언제든
            편하게 연락주시기 바랍니다. 항상 다양한 의견을 듣고 배우겠습니다.
          </Comment>
          <Info>EMAIL: doinki94@gmail.com</Info>
        </Container>
      </Contact>
    </StyledFooter>
  );
};

export default Footer;
