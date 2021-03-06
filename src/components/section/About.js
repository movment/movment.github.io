import React from 'react';
import styled from 'styled-components';
import Hr from '../common/Hr';
import Section from './Section';

const Block = styled.div`
  display: flex;
  width: 40%;
  line-height: 1.75;
  font-size: 1.125rem;
  margin: 0 50px;
  margin-top: 1.75rem;
  @media (max-width: 1023px) {
    width: 100%;
    margin: 0;
    padding: 20px;
  }
  @media (max-width: 576px) {
    width: 100%;
    margin: 0;
    padding: 20px;
  }
`;
const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.25rem;
  font-weight: 600;
`;
const Container = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  width: 90%;
  /* height: 400px; */
  @media (max-width: 576px) {
    width: 100%;
  }
  @media (max-width: 1023px) {
    width: 100%;
  }
`;
const BlockContinaer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 686px) {
    flex-direction: column;
  }
`;
const About = () => {
  return (
    <Section>
      <Container>
        <Heading>π­ About me</Heading>
        <Hr />
        <BlockContinaer>
          <Block>
            μ²μμλ λ¨μν βμ΄λ° νλ‘κ·Έλ¨μ΄ μμμΌλ©΄ μ’κ² λ€βλΌλ μκ°μμ βλ΄κ°
            νλ² λ§λ€μ΄ λ³΄λ©΄ μ΄λ¨κΉ?βλΌλ μκ°μΌλ‘ μ§μ  κ°λ°μ ν΄λ³΄κΈ°λ‘
            νμ΅λλ€. λ¨μν νλ‘κ·Έλ¨μ΄μμ§λ§ μ  μκ°μ λΌλ¦¬μ μΌλ‘ κ΅¬νν
            νλ‘κ·Έλ¨μ΄ μ μμ μΌλ‘ λμνλ λͺ¨μ΅μ λ³΄μμ λ κ°λ°μ μ¬λ―Έλ₯Ό λλΌκ²
            λμ΅λλ€.
            <br />
            νμ¬ νμ€ν κ°λ°μλ₯Ό λͺ©νλ‘ λ¦¬μ‘νΈμ λΈλλ‘ νλ‘μ νΈλ₯Ό μ§ννλ©΄μ
            ν΄λΉ μ­λμ ν€μμ€κ³  μμ΅λλ€.
          </Block>
          <Block>
            μ λ μ΄λ€ λ¬Έμ λ₯Ό λ§λλ©΄ μ΄λ ΅λ€κ³  ν¬κΈ°νλ κ²μ΄ μλλΌ, κ³ λ―Όνκ³ 
            λλ¦μ ν΄κ²°μ±μ λ§λ€μ΄ μ€ν¨λ₯Ό κ·Ήλ³΅ν΄ λκ°κ³  μμ΅λλ€.
            <br />
            λν, μλ‘μ΄ κΈ°μ μ κ΄μ¬μ΄ λ§κ³  κ·Έκ²μ λ°°μ λ€μν κ³³μ μ μ©νλ €κ³ 
            ν©λλ€. λ°λ³΅λλ μ½λλ₯Ό μ€μ΄κ³  λΉν¨μ¨μ μΈ λ‘μ§μ κ°μ νκΈ° μν΄
            κ³ λ―Όνκ³  λ λΈλ ₯ν©λλ€.
          </Block>
        </BlockContinaer>
      </Container>
    </Section>
  );
};

export default About;
