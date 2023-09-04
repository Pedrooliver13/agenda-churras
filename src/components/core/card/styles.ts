// Packages
import styled from 'styled-components';
import Link from 'next/link';

export const CardContainer = styled(Link)`
  max-width: 350px;
  width: 100%;
  font-size: 2.1rem;
  cursor: pointer;
  padding: 3.2rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors['base-card']};
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.09);
  transition: transform 0.2s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }

  svg {
    color: ${({ theme }) => theme.colors.yellow};
  }

  .date {
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: 2.8rem;
  }

  .description {
    margin-top: 0.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors['base-text']};
    text-transform: capitalize;
    word-break: break-all;
  }

  .infos {
    display: flex;
    justify-content: space-between;
    margin-top: 4.8rem;
    font-weight: 500;

    div {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`;
