import styled from 'styled-components';

export const HeaderLogin = styled.div`
  color: white;
  position: absolute;
  bottom: 60%;
  left: 30px;

  h1 {
    position: relative;
    bottom: -40px;
    left: 30px;
    font-size: 50px;
  }

  .triangle {
    position: absolute;
    bottom: 110px;
    left: -30px;
  }

  .tringdow2 {
    position: absolute;
    top: 254px;
    left: 253px;
  }
`;

export const Bordes = styled.div`
  display: flex;
  padding: 20px;

  .money {
    position: absolute;
    bottom: 1px;
    right: 1px;
  }

  .triangle1 {
    position: absolute;
    top: 1px;
    left: 1px;
  }

  .tringdown1 {
    position: absolute;
    bottom: -1px;
    right: -2px;
  }
`;

export const Container = styled.section`
  height: 100vh;
  width: 88%;
  margin: 0 auto;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
  border-radius: 0.7rem;
  background: rgb(29, 30, 37);
  background: linear-gradient(
    180deg,
    rgba(29, 30, 37, 1) 0%,
    rgba(34, 36, 44, 1) 42%,
    rgba(29, 30, 37, 1) 100%
  );
  height: 400px;

  button {
    background-color: #0c27b5;
    color: white;
    height: 40px;
    border-radius: 0.3rem;
    font-size: 18px;
    width: 100%;
    margin-top: 8px;
    font-weight: bold;
  }

  &::placeholder {
    font-size: 14px;
    padding-left: 0px;
    color: #888888;
  }
  a {
    margin-top: 10px;
  }

  input {
    color: white;
    border: none;
    display: block;
    background-color: #18191f;
    border-radius: 0.3rem;
    margin: 0.4rem 0;
    width: 100%;
    padding: 1rem 1rem;
    font-size: 16px;
  }
`;
