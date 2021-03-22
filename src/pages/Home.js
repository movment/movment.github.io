import React from 'react';
import Fade from 'react-reveal/Fade';
import About from '../components/section/About';
import GitHub from '../components/section/GitHub';
import Main from '../components/Main';
import Blog from '../components/section/Blog';
import Stack from '../components/section/Stack';
import Project from '../components/section/Projects';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import Header2 from '../components/Header2';
import Section from '../components/section/Section';

const Home = () => {
  return (
    <>
      <Nav />
      <Header2 />
      <Main>
        <Fade>
          <About />
        </Fade>
        <Section style={{ backgroundColor: '#f8f9fa' }}>
          <Fade>
            <GitHub />
            <Blog />
          </Fade>
        </Section>
        <Stack />
        <Project />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
