import styled from 'styled-components';
import { colors } from 'utils/colors';

export const Text = styled.p`
  max-width: 200px;
  height: 29px;

  font-weight: 600;
  font-size: 20px;
  line-height: 1.45;

  color: ${colors.black};
`;

export const Wrap = styled.div`
  display: flex;
  gap: 50px;
  justify-content: flex-end;
  margin-top: 50px;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 600px;

  /* background-image: ${props => `url(${props.headerImg})`}; */
`;

export const Anchor = styled.a`
  text-decoration: none;

  :hover,
  :focus {
    text-decoration: underline;
    text-decoration-color: ${colors.accentPink};
  }

  :hover ${Text}, :focus ${Text} {
    text-shadow: 2px 4px 7px rgba(0, 0, 0, 0.23);
  }
`;
