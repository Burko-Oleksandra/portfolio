import React from 'react';
import { nanoid } from 'nanoid';

import skills from '../../skills.json';
import { Wrap, SubTittle, List, Item, Decor, ItemWrap } from './Skills.styled';

export const Skills = () => {
  return (
    <Wrap>
      <SubTittle>Key Skills</SubTittle>
      <List>
        {skills.map(({ skills }) => (
          <ItemWrap key={nanoid()}>
            <Decor key={nanoid()}></Decor>
            <Item key={nanoid()}>{skills}</Item>
          </ItemWrap>
        ))}
      </List>
    </Wrap>
  );
};
