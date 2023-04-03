import React from 'react';
import { Container } from 'components/Container/Container';
import { Tittle } from '../Title/Tittle';
import { SubTittle } from '../About/Education/Education.styled';
import { Data, Decor, List, Item } from './Work.styled';

export const Work = () => {
  return (
    <Container>
      <div id="work"></div>
      <Tittle>Work Experience</Tittle>
      <SubTittle>TerraPromo</SubTittle>
      <Data>March 2022 - October 2022</Data>
      <List>
        <Item>
          <Decor></Decor>experience with HTML5, CSS3, JS, React
        </Item>
        <Item>
          <Decor></Decor>experience in adaptive layout
        </Item>
        <Item>
          <Decor></Decor>experience in creating an HTML page for a website based
          on design layouts
        </Item>
        <Item>
          <Decor></Decor>introducing new components into existing projects
        </Item>
        <Item>
          <Decor></Decor>writing code to implement application logic
        </Item>
      </List>
    </Container>
  );
};
