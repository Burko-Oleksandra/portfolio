import styled from 'styled-components';
import { colors } from 'utils/colors';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  margin-top: 200px;
`;

export const SubTittle = styled.h2`
  width: 140px;
  height: 40px;

  font-weight: 700;
  font-size: 28px;
  line-height: 1.43;
  text-decoration-line: underline;

  color: ${colors.black};
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;

  width: 300px;
`;

export const Item = styled.li`
  width: 300px;
  height: 29px;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.45;

  color: ${colors.black};
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
