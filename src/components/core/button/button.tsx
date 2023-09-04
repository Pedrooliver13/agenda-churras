// Packages
import { ReactElement, ButtonHTMLAttributes } from 'react';

// Styles
import * as Styled from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: ButtonProps): ReactElement => {
  return <Styled.ButtonContainer {...props} />;
};
