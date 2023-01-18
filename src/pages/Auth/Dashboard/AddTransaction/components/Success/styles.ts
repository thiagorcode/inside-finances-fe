import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: 50%;
  align-self: center;
`;

export const GroupButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    margin: 10px 0;

    &:last-child {
      background-color: transparent !important;

      &:hover {
        background-color: #2644d8;
      }
    }
  }
`;
