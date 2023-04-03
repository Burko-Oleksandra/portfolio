import styled from 'styled-components';
import { colors } from 'utils/colors';
import { transition } from 'utils/mixin';

export const StyledButton = styled.button`
  width: 310px;
  height: 54px;
  border: none;
  border-radius: 8px;
  padding: 10px;

  font-weight: 700;
  font-size: 20px;
  line-height: 1.45;

  color: ${colors.buttonText};
  background-color: ${colors.buttonColor};
  cursor: pointer;
  transition: background-color 250ms ${transition},
    box-shadow 250ms ${transition};

  :hover,
  :focus {
    background-color: #f7851f;
    box-shadow: 5px 5px 12px 1px rgba(96, 96, 96, 0.69);
  }
`;
