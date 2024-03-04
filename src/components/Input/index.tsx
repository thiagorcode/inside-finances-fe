/* eslint-disable react/display-name */
import * as React from 'react';
import { Container } from './styles';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: string;
  name?: string;
  value?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, name, value, onChange, ...props }, ref) => {
    return (
      <Container
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        ref={ref}
        {...props}
      />
    );
  },
);
