import styled, { keyframes, css } from 'styled-components';

const motion1 = keyframes`
0% {
}
100% {
  transform: translate(0, -50px);
}
`;
const motion2 = keyframes`
0% {
}
50% {
  /* transform: translate(-50px, 30px); */
}
100% {
  transform: translate(-100px, 50px);
}
`;
const motion3 = keyframes`
0% {
}
50% {
  /* transform: translate(30px, 30px); */
}
100% {
  transform: translate(-40px, -20px);
}
`;

const StyledHeader = styled.header`
  display: block;
  padding-top: 250px;
  padding-bottom: 100px;
  background-color: aliceblue;
  @media (max-width: 576px) {
    padding-top: 150px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem;

  margin: 0 auto;
  @media (max-width: 576px) {
    padding-top: 0px;
  }
`;
const Face = styled.img`
  object-fit: cover;
  /* margin-bottom: 48px; */
  position: relative;
  z-index: 10;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
`;

const Heading = styled.h1`
  font-size: 6rem;
  margin-bottom: 30px;
  z-index: 10;
  @media (max-width: 576px) {
    margin-bottom: 10px;
  }
`;
const P = styled.p`
  font-size: 1.5rem;
  z-index: 10;
`;
const Circle = styled.div`
  position: absolute;
  min-width: 100px;
  min-height: 100px;
  /* height: 200px; */
  background-color: #1abc9c;
  /* animation: ${({ motion }) => motion} 3s none infinite alternate; */
  ${({ motion }) =>
    css`
      animation: ${motion} 4s none infinite alternate;
    `}

  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  border: 50%;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
`;
const Header2 = () => {
  return (
    <StyledHeader>
      <Container>
        <Face src="/itsme.jpg" alt="face" />
        <Heading>Hello, world!</Heading>
        <P>
          안녕하세요, 신입 개발자 <b>김동인</b>입니다.
        </P>
      </Container>
      <div>
        <Circle right="9%" bottom="50%" motion={motion3} size="12vw" />
        <Circle right="80%" bottom="70%" motion={motion2} size="16vw" />
        <Circle right="45%" bottom="20%" motion={motion1} size="18vw" />
      </div>
    </StyledHeader>
  );
};

export default Header2;
