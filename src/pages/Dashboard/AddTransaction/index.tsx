import { Close } from '@mui/icons-material';
import { Box } from '@mui/system';
import { useState } from 'react';
import * as S from './styles';
import { Form } from './components/Form';
import { Success } from './components/Success';

interface AddTransactionProps {
  setIsVisibleModal: (bol: boolean) => void;
}

export const AddTransaction = ({ setIsVisibleModal }: AddTransactionProps) => {
  const [step, setStep] = useState<0 | 1>(1);

  const Components = {
    0: <Form setStep={setStep} />,
    1: <Success setStep={setStep} />,
  };

  return (
    <Box
      component="div"
      sx={{
        top: '10vh',
        maxWidth: '478px',
        ml: 'auto',
        mr: 'auto',
        backgroundColor: 'transparent',
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 0)',
        width: '100%',
        height: '100vh',
      }}
    >
      <Box
        component="div"
        bgcolor="#2B2E35"
        sx={{
          display: 'block',
          px: 2.5,
          mb: 2,
          borderRadius: 6,
          py: 2,
          paddingBottom: 3,
          height: '90%',
          overflowX: 'scroll',
        }}
      >
        <S.Container>
          <S.Header>
            <button type="button" onClick={() => setIsVisibleModal(false)}>
              <Close />
            </button>
            <h1>Adicionar Transação</h1>
          </S.Header>
          {Components[step]}
        </S.Container>
      </Box>
    </Box>
  );
};
