import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import M from './Burger/Menu';
import Burger from './Burger/Burger';
import { Link } from 'react-scroll';

const StyledNav = styled.nav`
  height: ${({ scroll }) => (scroll ? '40px' : '80px')};
  position: fixed;
  display: flex;
  padding: 1.5em;
  top: 0;
  left: 0;
  width: 100%;
  /* right: 0; */
  z-index: 1030;
  background-color: #2c3e50;
  transition: height 0.3s;
  @media (max-width: 576px) {
    padding: 0;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 1.5em;
  margin: 0 50px;
  @media (max-width: 576px) {
    padding: 0;
    margin: 0 30px;
  }
`;
const Title = styled.div`
  font-size: 1.75em;
  color: white;
  padding: 0.3125rem 0;
  margin-right: 1rem;
  font-weight: 700;
`;
const Menu = styled.div`
  color: white;
  @media only screen and (max-width: 1023px) {
    display: none;
  }
`;
const HMenu = styled.div`
  color: white;
  display: none;
  @media only screen and (max-width: 1023px) {
    display: block;
  }
`;
const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0 1rem;
  font-size: 1rem;
  font-weight: 600;
`;
const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const node = useRef();
  const onScroll = useCallback((e) => {
    const scrollTop = e.srcElement.scrollingElement.scrollTop;

    if (scrollTop >= 100) setScroll(true);
    else setScroll(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, [onScroll]);
  useOnClickOutside(node, () => setOpen(false));
  return (
    <StyledNav scroll={scroll}>
      <Container>
        <Title>DOIN</Title>
        <Menu>
          <StyledLink to="about" spy={true} smooth={true} duration={500}>
            ABOUT
          </StyledLink>
          <StyledLink to="gb" spy={true} smooth={true} duration={500}>
            GITHUB/BLOG
          </StyledLink>
          <StyledLink to="skills" spy={true} smooth={true} duration={500}>
            SKILLS
          </StyledLink>
          <StyledLink to="portfolio" spy={true} smooth={true} duration={500}>
            PORTFOLIO
          </StyledLink>
          <StyledLink to="contact" spy={true} smooth={true} duration={500}>
            CONTACT
          </StyledLink>
        </Menu>
        <HMenu ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <M open={open} setOpen={setOpen} />
        </HMenu>
      </Container>
    </StyledNav>
  );
};

export default Nav;
