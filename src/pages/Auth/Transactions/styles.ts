import styled from 'styled-components';

export const ContainerFilters = styled.section`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-direction: column;
  background-color: var(--secondary-bg-color);
  border-radius: 14px;
  margin: 10px auto;
  padding: 20px 30px;
`;

export const ContainerDate = styled.div`
  .ant-picker-input input {
    color: #fff;
    font-weight: bold;
  }
`;

export const ContainerCards = styled.div`
  div.ant-statistic-title {
    color: #fff;
    font-weight: bold;
  }
`;

export const ContainerTable = styled.div`
  .ant-tables-transactions {
    margin-bottom: 1rem;
  }
`;
