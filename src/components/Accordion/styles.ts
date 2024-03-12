import styled from 'styled-components';

export const Button = styled.button`
  .from {
    transform: rotate(0deg);
    transition: transform 0.3s ease;
  }

  .to {
    transform: rotate(180deg);
    transition: transform 0.3s ease;
  }
`;
