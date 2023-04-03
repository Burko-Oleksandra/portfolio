import React from 'react';
import { StyledButton } from 'components/Button/Button.styled';
import { Wrap, SubTittle, Speciality, Descr } from './Summary.styled';
import portfolio from '../../../images/cv.pdf';

export const Summary = () => {
  return (
    <Wrap>
      <SubTittle>Hi, I’m Oleksandra Burko</SubTittle>
      <Speciality>Full Stack Developer</Speciality>
      <Descr>
        I'm Software Developer and I'm looking for new challenges and have a
        huge desire to develop as a Frontend developer. I want create
        high-quality and user-friendly Web products from scratch.I have profound
        knowledge of HTML5/CSS3, including preprocessors and frameworks.
        Moreover, I have a good understanding of responsive web design and good
        competence in working with both native JavaScript and frameworks
        (React).
      </Descr>
      <a href={portfolio} download="cvBurkoOleksandra">
        <StyledButton>Download my CV</StyledButton>
      </a>
    </Wrap>
  );
};
