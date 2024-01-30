import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  .container {
    display: flex;
    flex-direction: column;
  }

  .spanding-container {
    width: 90%;
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
