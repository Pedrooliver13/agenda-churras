// Packages
import { css } from 'styled-components';

export const Container = css`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  /* BREAKPOINT 576px */
  @media (min-width: 36em) {
    max-width: 540px;
  }
  /* BREAKPOINT 768px */
  @media (min-width: 48em) {
    max-width: 760px;
  }
`;
