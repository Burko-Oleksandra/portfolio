import styled from 'styled-components';
import { colors } from 'utils/colors';
import { StyledButton } from 'components/Button/Button.styled';

export const SubTittle = styled.h2`
  margin-bottom: 90px;

  font-weight: 700;
  font-size: 40px;
  line-height: 1.45;

  color: ${colors.black};
`;

export const Mail = styled.a`
  display: block;
  margin-bottom: 5px;

  font-weight: 500;
  font-size: 40px;
  line-height: 1.45;

  text-decoration: none;
  color: ${colors.black};
`;

export const Phone = styled.a`
  display: block;

  margin-bottom: 90px;

  font-weight: 500;
  font-size: 40px;
  line-height: 1.45;

  text-decoration: none;
  color: ${colors.black};
`;

export const ContactBtn = styled(StyledButton)`
  width: 220px;
  height: 54px;
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 50px;
`;
