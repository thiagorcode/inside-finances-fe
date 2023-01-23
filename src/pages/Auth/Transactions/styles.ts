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
  .ant-table {
    background-color: var(--secondary-bg-color);
  }

  .ant-table-cell-row-hover {
    background-color: var(--secondary-hover-bg-color) !important;
  }
  .ant-table-cell {
    color: #fff;
  }

  .ant-table-thead > tr > th {
    background-color: var(--secondary-bg-color);
    color: #fff;
    font-weight: bold;
  }
  .ant-pagination-item-active {
    background-color: #000;
  }
  .ant-pagination-item-link {
    color: rgba(255, 255, 255, 0.5) !important;
  }
`;
