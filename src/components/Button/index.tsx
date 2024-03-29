import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <S.Button {...rest}>{children}</S.Button>;
};

export default Button;
