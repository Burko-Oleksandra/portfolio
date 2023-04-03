import React from 'react';
import { nanoid } from 'nanoid';

import { Container } from 'components/Container/Container';
import { Tittle } from '../Title/Tittle';
import {
  List,
  Item,
  ProjectLink,
  Image,
  Name,
  Stack,
  Descr,
  CodeLink,
  Wrap,
  Img,
} from './Project.styled';
import project from '../project.json';
import projectImg from '../../images/project.png';

export const Project = () => {
  return (
    <Container>
      <div id="project"></div>
      <Tittle>Project Experience</Tittle>
      <Img src={projectImg} alt="" />
      <List>
        {project.map(({ name, link, img, descr, stack, codeLink }) => (
          <Item key={nanoid()}>
            <Image src={img} alt={name} />
            <Wrap>
              <Name>
                <ProjectLink
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href={link}
                >
                  {name}
                </ProjectLink>
              </Name>
              <Stack>{stack}</Stack>
              <Descr>{descr}</Descr>
              <CodeLink
                target="_blank"
                rel="noopener noreferrer nofollow"
                href={codeLink}
              >
                Link to code
              </CodeLink>
            </Wrap>
          </Item>
        ))}
      </List>
    </Container>
  );
};
