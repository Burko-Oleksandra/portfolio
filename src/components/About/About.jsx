import React from 'react';
import { Container } from 'components/Container/Container';
import { Education } from './Education/Education';
import { Hobby } from './Hobby/Hobby';
import { Languages } from './Languages/Languages';
import { Tittle } from '../Title/Tittle';
import { Wrap, Img } from './About.styled';
import aboutImg from '../../images/about.png';

export const About = () => {
  return (
    <Container>
      <div id="about"></div>
      <Tittle>About me</Tittle>
      <Img src={aboutImg} alt="" />
      <Wrap>
        <Education />
        <Languages />
        <Hobby />
      </Wrap>
    </Container>
  );
};
