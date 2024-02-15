import styled from 'styled-components';

interface ButtonProps {
  checked?: boolean;
}

export const Input = styled.input`
  display: none;
`;

export const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  background-color: ${({ checked }) => (checked ? '#233DC7' : '')};
  color: white;
  border: ${({ checked }) => (checked ? '' : '1px solid #ffff')};
  border-radius: 5px;
`;
