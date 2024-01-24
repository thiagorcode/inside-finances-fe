import styled from 'styled-components';

export const ButtonRece = styled.button`
  align-items: center;
  display: flex;
  height: 160px;
  width: 280px;
  background-color: #233dc7;
  border-radius: 14px;
  cursor: pointer;
`;

export const ButtonDesp = styled.button`
  align-items: center;
  display: flex;
  height: 160px;
  width: 280px;
  background-color: #233dc7;
  border-radius: 14px;
  cursor: pointer;
`;

export const Label = styled.label`
  color: white;
  font-size: 17px;
  margin-left: 5px;
`;

export const ContainerCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  margin-left: 35px;
`;

export const DateInput = styled.div`
  .MuiPickerStaticWrapper-content {
    background-color: var(--secondary-bg-color);
  }
  .MuiButtonBase-root {
    background-color: var(--secondary-bg-color);
    color: #fff;
    font-weight: bold;
  }
  .MuiTypography-root {
    color: #fff;
    font-weight: bold;
  }

  .Mui-selected {
    background-color: #233dc7 !important;
  }
`;

export const TitleCategory = styled.h3`
  text-align: center;
`;

export const ContentOptions = styled.div`
  background-color: black;
  width: 33%;
`;
