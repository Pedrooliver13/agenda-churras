// Packages
import styled from 'styled-components';

export const SectionCardContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: -30px;
  gap: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.MD}) {
    justify-content: center;
  }
`;
