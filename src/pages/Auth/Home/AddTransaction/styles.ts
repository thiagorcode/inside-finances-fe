import styled from 'styled-components';
import { Box } from '@mui/system';

export const Container = styled.div`
  margin-inline: auto;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 1.125rem;
  }
  button {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  svg {
    color: #fff;
  }
`;

export const FormTransaction = styled.form`
  margin-bottom: 2.5rem;
`;

export const ContainerCategorys = styled.div`
  width: 100%;
  div {
    width: 30%;
    display: flex;
    flex-direction: row;
  }
`;

export const ButtonForm = styled.button<{ formValues?: { type: boolean } }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72%;
  height: 55px;
  margin-top: 10rem;
  margin-left: auto;
  margin-right: auto;
  background-color: ${props => props => props.disabled ? '#ccc' : '#233DC7'};
  color: ${props => props => props.disabled ? '#888' : '#fff'};
  border-radius: 1rem;
`;

export const OuterBox = styled(Box)`
  top: 10vh;
  max-width: 478px;
  margin-left: auto;
  margin-right: auto;
  background-color: transparent;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  height: 100vh;
`;

export const InnerBox = styled(Box)`
  display: block;
  padding: 2.5px;
  margin-bottom: 2px;
  border-radius: 6px;
  padding-bottom: 3px;
  height: 100%;
  overflow-x: scroll;
  background-color: #2b2e35;
`;
