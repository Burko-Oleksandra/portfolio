import styled from 'styled-components';
import { colors } from 'utils/colors';
import { transition } from 'utils/mixin';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 1300px;

  margin: auto auto;
  margin-bottom: 100px;
`;

export const Img = styled.img`
  position: absolute;
  top: 2150px;
  left: 0;
  width: 150px;

  /* background-image: ${props => `url(${props.headerImg})`}; */
`;

export const Wrap = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 15px;
  height: 102%;

  background-color: #000000e0;
  color: ${colors.white};
  transition: transform 250ms ${transition};
`;

export const Item = styled.li`
  overflow: hidden;
  width: 420px;
  height: 260px;
  transform: translateY(0);
  border-radius: 8px;
  border: 2px solid ${colors.buttonColor};

  :hover,
  :focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }

  :hover ${Wrap}, :focus ${Wrap} {
    transform: translateY(-100%);
  }
`;

export const ProjectLink = styled.a`
  color: ${colors.buttonColor};
  text-decoration: none;
  transition: color 250ms ${transition};

  :hover,
  :focus {
    color: #f7851f;
    text-decoration: underline;
  }
`;

export const Image = styled.img`
  width: 420px;
  height: 260px;
`;

export const Name = styled.p`
  margin-bottom: 10px;

  font-weight: 500;
  font-size: 24px;
  line-height: 1.45;
`;

export const Stack = styled.p`
  margin-bottom: 10px;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.45;
`;

export const Descr = styled.p`
  margin-bottom: 10px;
  text-align: justify;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.45;
`;

export const CodeLink = styled.a`
  color: ${colors.buttonColor};
  text-decoration: none;
  transition: color 250ms ${transition};

  :hover,
  :focus {
    color: #f7851f;
    text-decoration: underline;
  }
`;
