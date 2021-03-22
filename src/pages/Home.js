import React from 'react';
import Fade from 'react-reveal/Fade';
import About from '../components/section/About';
import GitHub from '../components/section/GitHub';
import Main from '../components/Main';
import Blog from '../components/section/Blog';
import Stack from '../components/section/Stack';
import Projects from '../components/section/Projects';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Header2 from '../components/Header2';
import Section from '../components/section/Section';
import { Element } from 'react-scroll';

const Home = () => {
  return (
    <>
      <Nav />
      <Header2 />
      <Main>
        <Fade>
          <Element name="about" className="element">
            <About />
          </Element>
        </Fade>
        <Element name="gb" className="element">
          <Section style={{ backgroundColor: '#f8f9fa' }}>
            <Fade>
              <GitHub />
              <Blog />
            </Fade>
          </Section>
        </Element>
        <Element name="skills" className="element">
          <Stack />
        </Element>
        <Element name="portfolio" className="element">
          <Projects />
        </Element>
      </Main>
      <Element name="contact" className="element">
        <Footer />
      </Element>
    </>
  );
};

export default Home;
