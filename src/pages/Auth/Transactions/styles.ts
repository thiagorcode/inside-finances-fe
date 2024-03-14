import styled from 'styled-components';

interface ButtonProps {
  checked?: boolean;
}

export const Container = styled.div`
  width: 100%;
  margin-top: 2rem;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  .container {
    width: 80%;
  }

  .default {
    padding: 1rem;
    background-color: #323238;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
  }

  .green {
    padding: 1rem;
    background-color: #015f43;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
  }

  .container-icon {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    color: #c4c4cc;
  }

  .container-title {
    padding-top: 6px;
    display: flex;
    justify-content: center;
  }
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${({ checked }) => (checked ? '#233DC7' : '')};
  color: #ffffff;
  margin-left: 1rem;
  margin-top: 1rem;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 3px;
  padding-bottom: 3px;
  border: ${({ checked }) => (checked ? '' : '1px solid #ffff')};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  .text {
    margin-left: 3px;
  }
`;

export const Container2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding-bottom: 5rem;

  .container {
    display: flex;
    flex-direction: column;
  }

  .spanding-container {
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f3f3f3;
  }

  .icon-container {
    display: flex;
  }

  .icon {
    margin-right: 1rem;
  }

  .title {
    color: #e1e1e6;
  }

  .description {
    color: #c4c4cc;
  }
`;
