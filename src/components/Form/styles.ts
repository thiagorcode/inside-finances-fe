import styled from 'styled-components';

interface InputProps {
  error?: string;
}

export const Container = styled.div`
  margin-bottom: 0.875rem;

  label {
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.35rem;
  }

  .validate-error {
    border-color: #d32f2f !important;
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
    border: 0.031rem solid;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.375rem;
    border-color: '#343438';

    &::placeholder {
      color: #888888;
      font-size: 1rem;
    }

    &:focus {
      border-color: #233dc7;
    }
  }
`;

export const Input = styled.input<InputProps>`
  margin-top: 0.25rem;
  width: 100%;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  line-height: 1.5rem;
  background: rgba(11, 11, 12, 0.8);
  border: 0.031rem solid;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.375rem;
  border-color: ${prop => (prop.error ? '#D32F2F' : '#343438')};

  &::placeholder {
    color: #888888;
    font-size: 1rem;
  }

  &:focus {
    border-color: #233dc7;
  }
`;
