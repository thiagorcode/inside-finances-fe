import styled from 'styled-components';

export const Container = styled.div`
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
