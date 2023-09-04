// Packages
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors['base-title']};
  background: url('/images/background.svg');
  height: 200px;

  h1 {
    font-weight: 800;
  }
`;
