import styled from 'styled-components';
import { colors } from 'utils/colors';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Item = styled.li`
  width: 120px;
  height: 29px;

  font-weight: 500;
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

export const ItemWrap = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
`;
