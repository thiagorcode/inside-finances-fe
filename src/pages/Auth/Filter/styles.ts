import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .root {
    width: 90%;
    padding: 8px 14px;
    border-radius: 8px;
    border: 1px solid #646464;
  }

  .trigger {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  }

  .trigger-content {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #233dc7;
    border-radius: 5px;
    padding: 3px;
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .content {
    display: flex;
    gap: 5px;
    margin-top: 6px;
  }

  .item {
    border-radius: 5px;
    padding: 4px;
    border: 1px solid #ffff;
    color: white;
  }

  .button-content {
    width: 90%;
    margin-top: 10rem;
    gap: 15px;
    display: flex;
    flex-direction: column;
  }

  .button-submit {
    color: white;
    background-color: #233dc7;
    border-radius: 5px;
    padding: 10px 15px;
  }

  .button-reset {
    color: white;
  }
`;
