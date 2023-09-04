// Packages
import styled from 'styled-components';
import Link from 'next/link';

export const CardButtonContainer = styled(Link)`
  max-width: 350px;
  width: 100%;
  height: 206px;
  font-size: 2.1rem;
  cursor: pointer;
  padding: 1rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors['base-card-secondary']};
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.09);
  transition: transform 0.2s ease-in-out;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover,
  &:focus,
  &:active {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.yellow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.MD}) {
    font-size: 1.6rem;
  }
`;
