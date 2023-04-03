import styled from 'styled-components';
import { colors } from 'utils/colors';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Item = styled.li`
  width: 250px;
  height: 29px;

  font-weight: 700;
  font-size: 20px;
  line-height: 1.45;

  color: ${colors.primaryText};
`;

export const Level = styled.span`
  font-weight: 400;
`;
