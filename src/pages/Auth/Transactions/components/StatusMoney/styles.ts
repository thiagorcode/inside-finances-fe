import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .default {
    width: 70%;
    padding: 1rem;
    margin-bottom: 10px;
    background-color: #323238;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5px;
  }

  .green {
    width: 70%;
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
  border: 1px solid #ffffff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
