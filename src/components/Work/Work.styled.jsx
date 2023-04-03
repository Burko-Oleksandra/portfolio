import styled from 'styled-components';
import { colors } from 'utils/colors';

export const Data = styled.h4`
  margin-top: -10px;
  margin-bottom: 30px;

  width: 270px;
  height: 29px;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.45;

  color: ${colors.black};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;

  width: 720px;
  height: 29px;

  font-weight: 400;
  font-size: 20px;
  line-height: 1.45;

  color: ${colors.primaryText};
`;

export const Decor = styled.span`
  display: block;
  width: 12px;
  height: 2px;

  background-color: #ec008c;
`;
