import { FormikErrors } from 'formik';
import {
  cloneElement,
  InputHTMLAttributes,
  ReactElement,
  useMemo,
} from 'react';
import { DataType } from './DataType.type';

import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  children?: ReactElement;
  error?: string;
}

export const Input = ({
  label,
  id,
  children,
  name,
  error,
  ...props
}: InputProps) => {
  const newId = useMemo(() => (id ? id : `form-${name}`), [id, name]);
  return (
    <S.Container>
      {label && <label htmlFor={id}>{label}</label>}
      {children ? (
        cloneElement(children, {
          className: `class_input ${error && 'validate-error'}`,
          id: newId,
          name,
          ...props,
        })
      ) : (
        <S.Input error={error} name={name} id={newId} {...props} />
      )}
    </S.Container>
  );
};
