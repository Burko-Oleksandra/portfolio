import styled from 'styled-components';
import { device } from '../../utils/mixin';

export const MainContainer = styled.div`
  max-width: 100vw;
  padding: 0 20px;

  ${device.tablet} {
    max-width: 100vw;
    padding: 0 32px;
  }

  ${device.desktop} {
    max-width: 100vw;
    padding: 0 70px;
  }
`;
