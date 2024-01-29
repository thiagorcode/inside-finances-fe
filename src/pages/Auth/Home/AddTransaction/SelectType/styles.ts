import styled from 'styled-components';

type ButtonProps = {
  selected?: boolean;
};

export const ButtonRecipe = styled.button<ButtonProps>`
  align-items: center;
  display: flex;
  height: 160px;
  width: 280px;
  background-color: ${props => (props.selected ? '#233DC7' : '#ccc')};
  color: ${props => (props.selected ? '#fff' : '#888')};
  border-radius: 14px;
  cursor: pointer;

  svg: {
    display: flex;
    flexdirection: column;
    marginleft: 100px;
    gap: 10px;
  }
`;
export const ButtonExpense = styled.button<ButtonProps>`
  align-items: center;
  display: flex;
  height: 160px;
  width: 280px;
  background-color: ${props => (props.selected ? '#233DC7' : '#ccc')};
  color: ${props => (props.selected ? '#fff' : '#888')};
  border-radius: 14px;
  cursor: pointer;
`;

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  gap: 10px;
`;

export const ContainerCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 10px;
  margin-top: 20px;
`;

export const Label = styled.label`
  color: white;
  font-size: 17px;
  margin-left: 5px;
`;
