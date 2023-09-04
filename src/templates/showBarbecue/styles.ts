// Packages
import styled, { css } from 'styled-components';

const baseCard = css`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 4px;
`;

export const ShowBarbecueContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .content {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
  }

  .remove {
    border: none;
    cursor: pointer;
    background-color: transparent;

    svg {
      color: ${({ theme }) => theme.colors['base-text']};
      transition: color 0.1s;
      &:hover {
        color: ${({ theme }) => theme.colors.red};
      }
    }
  }
`;

export const InviteHeader = styled.header`
  ${baseCard}

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: -20px;
  gap: 20px;

  svg {
    color: ${({ theme }) => theme.colors.yellow};
  }

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .infos {
    display: flex;
    flex-direction: column;

    .date {
      color: ${({ theme }) => theme.colors['base-title']};
      font-size: 2.8rem;
    }

    .description {
      margin-top: 0.8rem;
      font-size: 2.6rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors['base-text']};
      text-transform: capitalize;
      word-break: break-all;
    }
  }

  .value {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 500;
    font-size: 2.1rem;

    div {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
`;

export const InviteObservation = styled.div`
  ${baseCard};
  display: flex;
  align-items: center;
  border-bottom: 5px solid ${({ theme }) => theme.colors.yellow};
  gap: 10px;

  svg {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const InvitedPersonsList = styled.div`
  ${baseCard}
  flex: 1;

  ul {
    margin-top: 20px;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.background};

    &:last-child {
      border: none;
    }
  }
`;
