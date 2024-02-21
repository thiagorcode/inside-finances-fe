import styled from 'styled-components';


export const ContainerCard = styled.div`
 padding: 16px;
 max-width: 96vw;
 height: 232px;
 border-radius: 18px;
 background-color: var( --secondary-bg-color);
 margin-left: 8px;


`;

export const Valuespan = styled.span`
 font-weight: bold;
  font-size: 23px;

`;

export const Datespan = styled.span`
  font-size: 14px;

`;



export const MonthlyValue = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 flex-direction: row;
 gap: 10px;

 

 button{
    margin-left: 8px;
    width: 32px;
    height: 32px;
    background-color: var(--color-button-icon);
    border-radius: 4px;
    border: none;
 }

 

`;

export const BarDivision = styled.div`
 border-bottom: 1px solid #F3F3F3;
 margin-top: 8px;

`;

export const ImgStyle = styled.div`
display: flex;

p{
  color: var( --description-color);
  margin-left: 5px;
 }


`;

export const Group = styled.div`
margin-top: 20px;

span{
  margin-left: 29px;
  font-weight: bold;
}

`;




export const DirectionSpeedMater = styled.div`
display: flex;
margin-left: 40px;
flex-direction: column;

`;


export const Stylespan = styled.span`
font-size: 12px;
margin-top: 0px;
text-align: center;
color: var( --description-color);


`;

