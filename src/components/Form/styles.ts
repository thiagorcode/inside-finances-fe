import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 0.875rem;

  label {
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.35rem;
  }

  .class_input {
    margin-top: 0.25rem;
    width: 100%;
    padding-top: 0.5rem;
    padding-right: 0.75rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    line-height: 1.5rem;
    background: rgba(11, 11, 12, 0.8);
    border: 0.031rem solid #343438;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.375rem;

    &::placeholder {
      color: #888888;
      font-size: 1rem;
    }

    &:focus {
      border-color: #233dc7;
    }
  }
`;
