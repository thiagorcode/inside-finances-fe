import React from 'react';
import { Close } from '@mui/icons-material';
import { Box } from '@mui/system';
import * as Style from './styles';
import { SelectCategory } from './SelectCategory';
import { Success } from './Success';
import { useModal } from '@/context/modal';
import { Button, Modal } from '@mui/material';
import { SelectType } from './SelectType';
import { useFormTransaction } from '@/context/formTransaction';

export const AddTransaction = () => {
  const { toggleModal } = useModal();
  const { onSubmit, currentStep, nextStep, formValues, resetForm } =
    useFormTransaction();

  const components = [
    <SelectType key={'type'} />,
    <SelectCategory key={'category'} />,
    <Success key={'success'} />,
  ];

  const handleCloseModal = () => {
    toggleModal({
      addTransaction: {
        isOpen: false,
      },
    });
  };

  return (
    <Modal open onClose={handleCloseModal} sx={{ height: '100vh' }}>
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
            height: '100%',
            overflowX: 'scroll',
          }}
        >
          <Style.Container>
            <Style.Header>
              <button type="button" onClick={() => handleCloseModal()}>
                <Close />
              </button>
              <h1>Adicionar Transação</h1>
            </Style.Header>
            <form onSubmit={onSubmit}>{components[currentStep]}</form>
          </Style.Container>
          <Button
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '72%',
              height: '55px',
              marginTop: '10rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              backgroundColor: formValues.type ? '#233DC7' : '#ccc',
              color: formValues.type ? '#fff' : '#888',
              borderRadius: '1rem',
            }}
            onClick={nextStep}
            disabled={!formValues.type}
          >
            Proximo
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
