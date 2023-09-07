import styled from 'styled-components';
import { Add, Description } from '@mui/icons-material';


export const CarContainer = styled.div`
  
  span {
  font-size: 12px;
 }

  gap: 15px;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;

  label{
    font-size: 10px;
    margin-left: 3px;
  }
`;

export const CarBox = styled.div`
width: 60px;
height: 60px;
border-radius: 13px;
background-color: #212020;


&:hover{
  transition: all 700ms ease-in-out;
  -webkit-transform :translateY(-1px);
	transform :translateY(-10px);
  box-shadow: 0 5px 15px rgba(74, 74, 74, 1);

}
	
`;


export const MotionIcon = styled.div`
  display: flex;
  justify-content: center;
`;


export const StyledDescript = styled(Description)`
margin-top: 16px;
color: white;

`;

export const StyledAdd = styled(Add)`
margin-top: 16px;
color: white;
`;



