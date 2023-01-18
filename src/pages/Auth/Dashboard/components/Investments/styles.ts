import styled from 'styled-components';

export const VariableIncome = styled.div`
  div {
    margin-left: 12px;
  }
  svg {
    color: var(--color-expense);
  }
  h5 {
    font-size: 12px;
    color: #b5b5b5;
  }
`;

export const FixedIncome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    margin-left: 12px;
  }
  svg {
    color: var(--color-recipe);
  }
  h5 {
    font-size: 12px;
    color: #b5b5b5;
  }
`;
