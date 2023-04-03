import React from 'react';
import { Container } from 'components/Container/Container';
import { SubTittle, Mail, Phone, ContactBtn, BtnWrap } from './Contact.styled';
import portfolio from '../../images/cv.pdf';

export const Contact = () => {
  return (
    <Container>
      <div id="contacts"></div>
      <SubTittle>Interested in working together?</SubTittle>
      <Mail href="mailto:sashkaburko1994@gmail.com">
        sashkaburko1994@gmail.com
      </Mail>
      <Phone href="tel:+380930062426">+380930062426</Phone>
      <BtnWrap>
        <a
          href="https://t.me/sashenka1111"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <ContactBtn>Telegram</ContactBtn>
        </a>
        <a
          href="https://github.com/Burko-Oleksandra"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <ContactBtn>Github</ContactBtn>
        </a>
        <a
          href="https://www.linkedin.com/in/oleksandra-burko"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <ContactBtn>Linkedin</ContactBtn>
        </a>
        <a
          href="https://djinni.co/q/a0c6a78ced/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <ContactBtn>Djinni</ContactBtn>
        </a>
        <a href={portfolio} download="cvBurkoOleksandra">
          <ContactBtn>CV</ContactBtn>
        </a>
      </BtnWrap>
    </Container>
  );
};
