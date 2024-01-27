import styled from 'styled-components';

export const Container = styled.div`
  margin-inline: auto;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 1.125rem;
  }
  button {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  svg {
    color: #fff;
  }
`;

export const FormTransaction = styled.form`
  margin-bottom: 2.5rem;
`;

export const ContainerCategorys = styled.div`
  width: 100%;
  div {
    width: 30%;
    display: flex;
    flex-direction: row;
  }
`;
