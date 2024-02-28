import styled from 'styled-components';

export const ContainerModal = styled.div`
 
    position: fixed;
    top: 40%;

 padding: 16px;
 width:395px;
 height: 290px;
 border-radius: 18px;
 background-color: var( --secondary-bg-color);
 margin-left: 8px;

`;

export const Background = styled.div`

position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
background: rgba(0,0,0,0.624);
`;


export const ButtonClose = styled.div`

display: flex;
justify-content: flex-end;

button{
    background-color: transparent;

}
`;



export const InputsPart = styled.div`

display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
margin-top: 20px;
margin-left: 10px;


span{
    margin-right: 60%;
    font-weight: 400;
    color: #ffffff;
    font-size: 20px;

}
input{
    width: 96%;

    background-color:  var( --secondary-bg-color);
    padding: 20px;
    border: solid 1px #ffffff;
    border-radius: 8px;
    color: #ffffff;
    font-size: 20px;
    ::placeholder{
        color: #ffffff;
    }
;
}

button{
    margin-top: 15px;
    background-color: var(--main-bg-button-color);
    color: #ffffff;
    border-radius: 8px;
    padding: 20px;
    width: 190px;
    height: 60px;
    font-size: 18px;
    font-weight: bold;

}

`;
