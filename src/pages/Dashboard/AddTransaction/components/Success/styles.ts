import styled from 'styled-components';

export const Button = styled.button`
  box-shadow: none;
  text-transform: none;
  font-size: 1rem;
  padding: 6px;
  width: 100%;
  height: 55px;
  border: 1px solid;
  line-height: 1.5;
  color: #fff;
  background-color: #233dc7;
  border-color: #233dc7;
  border-radius: 20px;
  font-weight: bold;
  margin-top: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #2644d8;
    border-color: #2644d8;
    box-shadow: none;
  }
  &:active {
    box-shadow: none;
    background-color: #2644d8;
    border-color: #2644d8;
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
  }
  &:disabled {
    opacity: 0.7;
    cursor: pointer;
  }
`;
