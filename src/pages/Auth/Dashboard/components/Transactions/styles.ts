import { Add, Description } from '@mui/icons-material';
import styled from 'styled-components';

export const Resume = styled.div`
  margin-top: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 1.1rem 0;
    border-bottom: 0.1px solid #b5b5b5;
    color: #858aa1;
    width: 100%;
  }

  button {
    margin-top: 1rem;
  }
  svg {
    color: #949499;
    font-size: 2rem;
  }

  span.text-category {
    min-width: 110px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-width: 100px;

  span.box-date {
    font-size: 0.7rem;
  }
`;

export const Spiral = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 28px;
  margin-bottom: 25px;
  span {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: #fff;

    font-size: 32px;
  }

  span:last-child {
    color: var(--color-recipe);
    font-weight: 400;
    font-size: 14px;
  }
`;

export const BoxTypeValues = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    background-color: #3c404e;
    border-radius: 4px;
    padding: 15px 13px;
    display: flex;
    align-items: center;
    transition: box-shadow 0.2s;

    :hover {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    :first-child svg {
      color: var(--color-recipe);
    }
    :last-child svg {
      color: var(--color-expense);
    }
  }
`;

export const Title = styled.h2`
 margin-bottom: 10px;
 margin-left: 16px;
 `;


export const CarContainer = styled.div`
  

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

export const labelCard = styled.div`
 label{
  font-size: 12px;
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



