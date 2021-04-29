import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';
import Hr from './Hr';

const Wrapper = styled.div`
  & + & {
    margin-top: 20px;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 50px;
  @media (max-width: 787px) {
    flex-direction: column-reverse;
    padding: 0;
  }
`;
const HeadContainer = styled.div`
  margin-top: 30px;
`;
const Left = styled.div`
  width: 50%;
  @media (max-width: 787px) {
    width: 100%;
  }
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 50%;
  @media (max-width: 787px) {
    width: 100%;
  }
`;
const ImgWrapper = styled.div`
  display: inline-block;
  max-height: 450px;
  @media (max-width: 787px) {
    max-height: 420px;
  }
`;
const Img = styled.img`
  cursor: pointer;
  width: 100%;
  &:hover {
    filter: blur(2px);
  }
`;

const Project = ({ title, notion, content, imgSrc, gitHub, did, stack }) => {
  return (
    <Wrapper>
      <Heading size="1.5em">
        <i>{title}</i>
      </Heading>
      <Hr />
      <Content>
        <Left>
          {notion && (
            <Heading size="1.25em">
              <a
                href={notion}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'underline' }}
              >
                팀 협업 페이지
              </a>
            </Heading>
          )}
          <HeadContainer>
            <Heading size="1.25em">📃 Content</Heading>
            <div>{content}</div>
          </HeadContainer>
          <HeadContainer>
            <Heading size="1.25em">🙋‍♂ What I did</Heading>
            <div>
              {did.map((cur, index) => (
                <div key={index}>• {cur}</div>
              ))}
            </div>
          </HeadContainer>
          <HeadContainer>
            <Heading size="1.25em">📚 Stack</Heading>
            <div>
              {stack.map((cur, index) => (
                <div key={index}>• {cur}</div>
              ))}
            </div>
          </HeadContainer>
        </Left>
        <Right>
          <ImgWrapper>
            <Img
              src={imgSrc}
              alt="Project"
              onClick={() => {
                window.open(gitHub.client);
              }}
            />
          </ImgWrapper>
          <Heading size="1.25em">🐙 GitHub</Heading>
          <div>
            -{' '}
            <a
              href={gitHub.client}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'underline' }}
            >
              Client repository
            </a>
          </div>
          <div>
            -{' '}
            <a
              href={gitHub.server}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'underline' }}
            >
              Server repository
            </a>
          </div>
          {gitHub.demo && (
            <div>
              -{' '}
              <a
                href={gitHub.demo}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: 'underline' }}
              >
                Demo
              </a>
            </div>
          )}
        </Right>
      </Content>
    </Wrapper>
  );
};

export default Project;
