import { cloneElement, InputHTMLAttributes, ReactElement } from 'react';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  children?: ReactElement;
}

export const Input = ({ label, id, children, ...props }: InputProps) => {
  return (
    <S.Container>
      {label && <label htmlFor={id}>{label}</label>}
      {children ? (
        cloneElement(children, {
          className: 'class_input',
          ...props,
        })
      ) : (
        <input className="class_input" {...props} />
      )}
    </S.Container>
  );
};
