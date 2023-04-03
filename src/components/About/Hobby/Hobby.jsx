import React from 'react';
import { SubTittle } from '../Education/Education.styled';

import { List, Item, Decor, ItemWrap } from './Hobby.styled';

export const Hobby = () => {
  return (
    <div>
      <SubTittle>Hobby</SubTittle>
      <List>
        <ItemWrap>
          <Decor></Decor>
          <Item>Drawing</Item>
        </ItemWrap>
        <ItemWrap>
          <Decor></Decor>
          <Item>Table tennis</Item>
        </ItemWrap>
        <ItemWrap>
          <Decor></Decor>
          <Item>Volleyball</Item>
        </ItemWrap>
      </List>
    </div>
  );
};
