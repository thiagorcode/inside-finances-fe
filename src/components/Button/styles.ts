import styled from 'styled-components';

interface ButtonProps {
  size?: 'primary' | 'disabled' | 'simple';
}

const properties = (size?: 'primary' | 'disabled' | 'simple') => {
  switch (size) {
    case 'primary':
      return {
        borderRadius: '8px',
        padding:'0px 32px' ,
        height: '64px',
        background:'#233dc7'
      };

    case 'disabled':
      return {
        borderRadius: '8px',
        padding:'0px 32px' ,
        height: '64px',
        border:'solid 2px'
      };

    case 'simple':
      return {
        padding:'0px 20px' ,
        height: '64px',
        border:'none',
        borderBt:'2px solid',
        background:'none'

      };
    default:
      return {
        width: 'inherit',
        height: 'inherit',
      };
  }
};

export const Button = styled.button<ButtonProps>`
  border-radius: ${props => properties(props?.size).borderRadius};
  box-shadow: none;
  text-transform: none;
  font-size: 16px;  
  font-family: 'Poppins';
  width: ${props => properties(props?.size).width};
  height: ${props => properties(props?.size).height};
  padding: ${props => properties(props?.size).padding};
  border: ${props => properties(props?.size).border};
  line-height: 1.5;
  font-weight: bold;
  color: ${props => props.color || '#fff'};
  background-color: ${props => properties(props?.size).background};
  border-color: #233dc7;
  border-bottom: ${props => properties(props?.size).borderBt};
  transition: all 700ms ease-in-out;

  
  &:hover {
    padding: ${props => props.size === 'simple' && '0px 30px' };
    background-color: ${props => props.size === 'simple' ? 'transparent' : '#2644d8 '};
    border-color:${props => props.size === 'simple' ? '#ffff' : '#233dc7 '};
    box-shadow: none;
  }
  &:active {
    box-shadow: none;
    background-color: ${props => props.size === 'simple' ? 'transparent' : '#2644d8 '};
    border-color: ${props => props.size === 'simple' ? '#ffff' : '#233dc7 '};
  }
  &:focus {
    box-shadow: ${props => props.size === 'simple' ? 'none' : '0 0 0 0.2rem rgba(0, 123, 255, 0.5)'
  }


  }

  
`;
