import { Close } from '@mui/icons-material';
import * as Style from './styles';
import { SelectCategory } from './SelectCategory';
import { Success } from './Success';
import { useModal } from '@/context/modal';
import { SelectType } from './SelectType';
import { useFormTransaction } from '@/context/formTransaction';
import { Modal } from '@mui/material';

export const AddTransaction = () => {
  const { toggleModal } = useModal();
  const { onSubmit, currentStep, nextStep, formValues } = useFormTransaction();

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
      <Style.OuterBox component="div">
        <Style.InnerBox component="div">
          <Style.Container>
            <Style.Header>
              <button type="button" onClick={() => handleCloseModal()}>
                <Close />
              </button>
              <h1>Adicionar Transação</h1>
            </Style.Header>
            <form onSubmit={onSubmit}>{components[currentStep]}</form>
          </Style.Container>
          <Style.ButtonForm
            formValues={
              formValues && typeof formValues.type === 'boolean'
                ? { type: formValues.type }
                : undefined
            }
            onClick={nextStep}
            disabled={!formValues.type}
          >
            Proximo
          </Style.ButtonForm>
        </Style.InnerBox>
      </Style.OuterBox>
    </Modal>
  );
};
