import styled from 'styled-components';



export const DimensionContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 10px;
 margin-left: 25px;

`;

export const Container = styled.div`
margin-top: 25px;
display: flex;
align-items: center;
padding: 10px;
width: 347px;
height: 60px;
border-radius: 15px;
border: 1px solid #646464;
gap: 15px;

span{
    font-size: 17px;
    color: #ffff;
    font-weight: bold;
}

`;

export const ContainerGlobal = styled.div`
display: flex;
align-items: center;
padding: 10px;
width: 347px;
height: 60px;
border-radius: 15px;
border: 1px solid #646464;
gap: 15px;
margin-top: 20px;

span{
    font-size: 17px;
    color: #ffff;
    font-weight: bold;
}

`;
export const Style = styled.div`
display: flex;
justify-content: center;
border-radius:8px;
align-items: center;
 width: 30px;
 height: 30px;
 background-color: var(--main-bg-button-color);

`;

export const ContainerExit = styled.div`
display: flex;
align-items: center;
padding: 10px;
width: 347px;
height: 60px;
border-radius: 15px;
gap: 15px;
background-color: var(--main-bg-button-color);
margin-top: 120%;
span{
    margin-left: 5px;
    font-size: 17px;
    color: #ffff;
    font-weight: bold;
}

`;
