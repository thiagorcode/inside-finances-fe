import { useState } from 'react';
import { Close } from '@mui/icons-material';
import { Box } from '@mui/system';
import * as S from './styles';
import { Form } from './Form';
import { Success } from './Success';
import { useModal } from '@/context/modal';
import { Modal } from '@mui/material';

export const AddTransaction = () => {
  const { toggleModal } = useModal();
  const [step, setStep] = useState<0 | 1>(0);

  const components = {
    0: <Form setStep={setStep} />,
    1: <Success setStep={setStep} />,
  };

  const handleCloseModal = () => {
    toggleModal({
      addTransaction: {
        isOpen: false,
      },
    });
  };

  return (
    <Modal open sx={{ height: '100vh' }}>
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
              <button type="button" onClick={() => handleCloseModal()}>
                <Close />
              </button>
              <h1>Adicionar Transação</h1>
            </S.Header>
            {components[step]}
          </S.Container>
        </Box>
      </Box>
    </Modal>
  );
};
