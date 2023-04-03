import React from 'react';
import { Container } from 'components/Container/Container';
import { Summary } from './Summary/Summary';
import { Skills } from './Skills/Skills';

import { Wrap } from './Hero.styled';

export const Hero = () => {
  return (
    <Container>
      <Wrap>
        <Summary />
        <Skills />
      </Wrap>
    </Container>
  );
};
