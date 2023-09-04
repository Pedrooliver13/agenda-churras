// Packages
import styled from 'styled-components';

export const InviteFormContainer = styled.form`
  max-width: 350px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.SM}) {
    max-width: 100%;
  }
`;
