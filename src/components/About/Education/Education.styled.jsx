import styled from 'styled-components';
import { colors } from 'utils/colors';

export const SubTittle = styled.h3`
  width: 122px;
  height: 40px;
  margin-bottom: 20px;

  font-weight: 500;
  font-size: 28px;
  line-height: 1.43;
  text-decoration-line: underline;

  color: ${colors.black};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Spec = styled.h4`
  width: 220px;
  height: 29px;

  font-weight: 700;
  font-size: 20px;
  line-height: 1.45;

  color: ${colors.primaryText};
`;

export const Descr = styled.p`
  width: 310px;
  height: 29px;

  font-weight: 400;
  font-size: 20px;
  line-height: 1.45;

  color: ${colors.primaryText};
`;
