import React from 'react';
import { SubTittle } from '../Education/Education.styled';
import { List, Item, Level } from './Languages.styled';

export const Languages = () => {
  return (
    <div>
      <SubTittle>Languages</SubTittle>
      <List>
        <Item>
          <p>
            English - <Level>Intermediate (B1)</Level>
          </p>
        </Item>
        <Item>
          <p>
            Ukrainian - <Level>Proficient (C2)</Level>
          </p>
        </Item>
        <Item>
          <p>
            Russian - <Level>Proficient (C2)</Level>
          </p>
        </Item>
      </List>
    </div>
  );
};
