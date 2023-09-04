// Packages
import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors['base-button']};
  color: ${(props) => props.theme.colors.white};
  margin-top: 2rem;
  padding: 1.4rem;
  border-radius: 18px;
  border: 1px solid transparent;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s;

  &:not(:disabled):hover {
    background-color: ${(props): string => props.theme.white};
    color: ${(props): string => props.theme['yellow-500']};
    border: 1px solid ${(props): string => props.theme['yellow-500']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (max-width: 760px) {
    font-size: 1.2rem;
  }
`;
