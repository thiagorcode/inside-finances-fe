import styled from 'styled-components';

interface ButtonProps {
  types?: 'primary' |  'simple';
}

const properties = (type?: 'primary' | 'simple') => {
  switch (type) {
    case 'primary':
      return {
        borderRadius: '8px',
        padding:'0px 32px' ,
        height: '64px',
        background:'#3652DC'
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
  border-radius: ${props => properties(props?.types).borderRadius};
  box-shadow: none;
  text-transform: none;
  font-size: 16px;  
  font-family: 'Poppins';
  width: ${props => properties(props?.types).width};
  height: ${props => properties(props?.types).height};
  padding: ${props => properties(props?.types).padding};
  border: ${props => properties(props?.types).border};
  line-height: 1.5;
  font-weight: bold;
  color: ${props => props.color || '#fff'};
  background-color: ${props => properties(props?.types).background};
  border-color: #233dc7;;
  border-bottom: ${props => properties(props?.types).borderBt};
  transition: all 700ms ease-in-out;
   
  &:disabled{
    background-color: ${props => props.types === 'primary' && '#919ee3'};
  } 


  &:not(:disabled):hover {
    padding: ${props => props.types === 'simple' && '0px 30px' };
    background-color: ${props => props.types === 'primary' && '#233dc7' };
    background-color: ${props => props.types === 'simple' 
    && 'transparent'};
    border-color:${props => props.types === 'simple' ? '#ffff' : '#233dc7 '};
    box-shadow: none;
  }

  &:active {
    box-shadow: none;
    background-color: ${props => props.types === 'simple' ? 'transparent' : '#2644d8 '};
    border-color: ${props => props.types === 'simple' ? '#ffff' : '#233dc7 '};
  }
  &:focus {
    box-shadow: ${props => props.types === 'simple' ? 'none' : '0 0 0 0.2rem rgba(0, 123, 255, 0.5)'
  }

  }

  
`;
