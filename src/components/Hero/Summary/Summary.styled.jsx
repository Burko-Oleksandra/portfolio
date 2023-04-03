import styled from 'styled-components';
import { colors } from 'utils/colors';

export const Wrap = styled.div`
  margin-top: 200px;
  width: 750px;
`;

export const SubTittle = styled.h2`
  width: 640px;
  height: 58px;
  margin-bottom: 5px;

  font-weight: 700;
  font-size: 40px;
  line-height: 1.45;

  color: ${colors.black};
`;

export const Speciality = styled.p`
  width: 420px;
  height: 35px;
  margin-bottom: 20px;

  font-weight: 500;
  font-size: 24px;
  line-height: 1.45;

  color: ${colors.buttonColor};
`;

export const Descr = styled.p`
  width: 750px;
  height: 228px;
  margin-bottom: 35px;
  text-align: justify;

  font-weight: 400;
  font-size: 20px;
  line-height: 1.9;

  color: ${colors.primaryText};
`;
