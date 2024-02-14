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
    padding: 4px;
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
`;
