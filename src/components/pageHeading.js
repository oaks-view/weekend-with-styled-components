import styled from 'styled-components';

import { THEME } from '../constants';

const PageHeading = styled.h2`
  text-align: left;
  align-self: flex-start;
  @media (max-width: ${THEME.breakpoints.sm}) {
    align-self: center;
    font-size: 16px;
  }
`;

export default PageHeading;
