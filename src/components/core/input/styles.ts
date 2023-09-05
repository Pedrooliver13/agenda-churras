// Packages
import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  margin: 10px 0px;

  label {
    font-weight: 800;
    margin: 5px;

    span {
      color: ${({ theme }) => theme.colors.red};
      font-size: 2rem;
    }
  }

  input {
    width: 100%;
    min-height: 5.4rem;
    border: 1px solid ${({ theme }) => theme.colors['base-input']};
    border-radius: 8px;
    padding: 1.6rem;
    color: ${({ theme }) => theme.colors['base-text']};
  }

  .error {
    display: block;
    padding: 0.5rem;
    color: ${({ theme }) => theme.colors.red};
  }
`;
