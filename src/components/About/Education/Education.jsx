import React from 'react';
import { SubTittle, List, Item, Spec, Descr } from './Education.styled';

export const Education = () => {
  return (
    <div>
      <SubTittle>Education</SubTittle>
      <List>
        <Item>
          <Spec>Fullstack Developer</Spec>
          <Descr>IT School GoIT (2022)</Descr>
        </Item>
        <Item>
          <Spec>Master of Psychology</Spec>
          <Descr>University “Ukraine” (2010-2015)</Descr>
        </Item>
      </List>
    </div>
  );
};
