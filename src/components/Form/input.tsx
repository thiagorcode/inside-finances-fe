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
  error: FormikErrors<DataType>;
}

export const Input = ({
  label,
  id,
  children,
  name,
  error,
  ...props
}: InputProps) => {
  const isError = useMemo(() => (error ? error[name] : ''), [error, name]);
  const newId = useMemo(() => (id ? id : `form-${name}`), [id, name]);
  return (
    <S.Container>
      {label && <label htmlFor={id}>{label}</label>}
      {children ? (
        cloneElement(children, {
          className: `class_input ${isError && 'validate-error'}`,
          id: newId,
          name,
          ...props,
        })
      ) : (
        <S.Input error={isError} name={name} id={newId} {...props} />
      )}
    </S.Container>
  );
};
