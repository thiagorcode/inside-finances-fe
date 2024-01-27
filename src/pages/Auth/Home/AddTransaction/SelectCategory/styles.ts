import styled from 'styled-components';

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
