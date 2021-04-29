import styled from 'styled-components';
import { Link } from 'react-scroll';
import { useCallback, useEffect } from 'react';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(100%)')};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const Menu = ({ open, setOpen }) => {
  const onClick = useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  return (
    <StyledMenu open={open}>
      <Link
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        onClick={onClick}
      >
        <span role="img" aria-label="about us">
          💁🏻‍♂️
        </span>
        About Me
      </Link>
      <Link to="gb" spy={true} smooth={true} duration={500} onClick={onClick}>
        <span role="img" aria-label="price">
          🐙
        </span>
        GITHUB/BLOG
      </Link>
      <Link
        to="skills"
        spy={true}
        smooth={true}
        duration={500}
        onClick={onClick}
      >
        <span role="img" aria-label="contact">
          📚
        </span>
        SKILLS
      </Link>
      <Link
        to="portfolio"
        spy={true}
        smooth={true}
        duration={500}
        onClick={onClick}
      >
        <span role="img" aria-label="contact">
          🌎
        </span>
        PORTFOLIO
      </Link>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        onClick={onClick}
      >
        <span role="img" aria-label="contact">
          📩
        </span>
        CONTACT
      </Link>
    </StyledMenu>
  );
};

export default Menu;
