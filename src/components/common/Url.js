import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  height: 106px;
  width: 100%;
  border: 1px solid rgba(55, 53, 47, 0.16);
  margin: 4px 0;
  border-radius: 3px;
  transition: background 20ms ease-in 0s;
  &:hover {
    background: rgba(55, 53, 47, 0.08);
  }
`;
const Sum = styled.div`
  width: 75%;
  padding: 14px;
`;
const Title = styled.div`
  font-size: 14px;
  height: 24px;
  margin-bottom: 2px;
  color: rgb(55, 53, 47);
`;
const Text = styled.div`
  font-size: 12px;
  height: 32px;
  color: rgba(55, 53, 47, 0.6);
  overflow: hidden;
`;
const Link = styled.div`
  font-size: 12px;
  height: 16px;
  margin-top: 6px;
  color: rgb(55, 53, 47);
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  display: block;
  width: 25%;
  object-fit: cover;
`;
const Fav = styled.img`
  height: 16px;
  width: 16px;
  margin-right: 6px;
`;

const Url = ({ title, text, link, ico, img }) => {
  return (
    <Wrapper
      onClick={() => {
        window.open(link, '_blank');
      }}
    >
      <Sum>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Link>
          <Fav src={ico} />
          {link}
        </Link>
      </Sum>
      <Img src={img} />
    </Wrapper>
  );
};

export default Url;
