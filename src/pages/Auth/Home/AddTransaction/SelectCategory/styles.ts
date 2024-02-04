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
  margin-top: 1rem;
`;

export const ContentOptions = styled.div`
  background-color: black;
  width: 33%;
`;

export const FieldCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 10px;
  margin-top: 20px;
`;

export const CategoryBadge = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  cursor: pointer;
  margin: 1rem;
  color: #ffff;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;
