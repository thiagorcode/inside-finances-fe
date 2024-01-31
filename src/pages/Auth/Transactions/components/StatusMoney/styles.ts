import styled from 'styled-components';

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

export const Button = styled.button`
  color: #ffffff;
  margin-left: 1rem;
  margin-top: 1rem;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid #ffffff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
