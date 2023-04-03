import React from 'react';
import { Container } from 'components/Container/Container';
import { Text, Wrap, Anchor, Img } from './Header.styled';
import headerImg from '../../images/header.png';

export const Header = () => {
  return (
    <Container>
      <Wrap>
        <Img src={headerImg} alt="" />
        <Anchor href="#about">
          <Text>About me</Text>
        </Anchor>
        <Anchor href="#work">
          <Text>Work Experience</Text>
        </Anchor>
        <Anchor href="#project">
          <Text>Project Experience</Text>
        </Anchor>
        <Anchor href="#contacts">
          <Text>Contacts</Text>
        </Anchor>
      </Wrap>
    </Container>
  );
};
