// Packages
import { ReactElement, InputHTMLAttributes, forwardRef } from 'react';

// Styles
import * as Styled from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  error?: string;
}

const InputBase = (
  props: InputProps,
  ref: React.LegacyRef<HTMLInputElement> | undefined
): ReactElement => {
  return (
    <Styled.InputContainer>
      <label htmlFor={props.id}>
        {props.label}
        {props.required && <span>*</span>}
      </label>
      <input id={props.id} ref={ref} {...props} />
      <p className={props.error ? 'error' : ''}>{props?.error}</p>
    </Styled.InputContainer>
  );
};

export const Input = forwardRef(InputBase);
