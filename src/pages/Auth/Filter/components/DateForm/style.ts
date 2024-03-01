import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  color: white;

  .form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  .button {
    margin-top: 10px;
    color: white;
    background-color: #233dc7;
    border-radius: 5px;
    padding: 10px 15px;
  }
`;
