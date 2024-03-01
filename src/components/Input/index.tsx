/* eslint-disable react/display-name */
import * as React from 'react';
import { Container } from './styles';

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...props }, ref) => {
    return <Container type={type} ref={ref} {...props} />;
  },
);
