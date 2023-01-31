import styled from 'styled-components';

export const Container = styled.div`
  margin-inline: auto;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
  h1 {
    font-size: 1.125rem;
    line-height: 2rem;
    margin-left: 1rem;
  }
  button {
    cursor: pointer;
  }
  svg {
    color: #fff;
  }
`;

export const FormTransaction = styled.form`
  margin-bottom: 50px;
`;

export const ContainerCategorys = styled.div`
  width: 100%;
  div {
    width: 30%;
    display: flex;
    flex-direction: row;
  }
`;
