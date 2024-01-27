import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  height: 195px;
  background: linear-gradient(
    180deg,
    #646a8b 0%,
    rgba(100, 106, 139, 0.7) 41.18%,
    rgba(100, 106, 139, 0.07) 96.41%
  );
  border-radius: 25px;
  padding: 0 25px;

  & > p {
    font-size: 18px;
    font-weight: bold;
    color: #ffffff;
  }

  div p {
    font-size: 16px;
    color: #dfdfdf;
  }

  div span {
    font-size: 12px;
    color: #b5b5b5;
    font-weight: bold;
  }
`;

export const Balance = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 14px;

  border-bottom: 0.4px solid #b5b5b5;
  div h6 {
    font-size: 14px;
    color: #b5b5b5;
  }

  div span {
    font-size: 36px;
    color: #ffffff;
  }
  button {
    width: 42px;
    height: 42px;
  }
`;

export const ResumeCard = styled.div`
  padding-bottom: 70px;
  margin-top: 16px;
  text-align: center;
  & > div > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }
`;

export const ResumeCardBox = styled.span`
  background-color: #c4c4c4;
  color: #999999;
  padding: 9px 17px;
  border-radius: 4px;
  margin-right: 7.82px;
`;
export const ResumeTypeBuy = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 16px;
    text-align: left;
  }
  span:last-child {
    color: #b5b5b5;
    font-size: 14px;
    margin-top: 6px;
  }
`;
