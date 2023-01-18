import styled from 'styled-components';

interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
}

const properties = (size?: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return {
        width: '40px',
        height: '40px',
      };

    case 'medium':
      return {
        width: '100%',
        height: '55px',
        borderRadius: '20px',
      };

    case 'large':
      return {
        width: '100%',
        height: '55px',
        borderRadius: '20px',
      };
    default:
      return {
        width: 'inherit',
        height: 'inherit',
      };
  }
};

export const Button = styled.button<ButtonProps>`
  box-shadow: none;
  text-transform: none;
  font-size: 16px;
  font-family: 'Poppins';
  width: ${props => properties(props?.size).width};
  height: ${props => properties(props?.size).height};
  padding: 6px;
  border: 1px solid;
  line-height: 1.5;
  font-weight: bold;
  color: ${props => props.color || '#fff'};
  background-color: #233dc7;
  border-color: #233dc7;
  &:hover {
    background-color: #2644d8;
    border-color: #2644d8;
    box-shadow: none;
  }
  &:active {
    box-shadow: none;
    background-color: #2644d8;
    border-color: #2644d8;
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }
`;
