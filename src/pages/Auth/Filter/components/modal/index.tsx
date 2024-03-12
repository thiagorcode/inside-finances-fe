import { useModal } from '@/context/modal';
import { Modal } from '@mui/material';
import { ModalContent } from './style';
import { DateForm } from '../DateForm';

export function FilterModal() {
  const { toggleModal } = useModal();

  function closeModal() {
    toggleModal({
      addFilter: {
        isOpen: false,
      },
    });
  }

  return (
    <Modal
      open
      onClose={closeModal}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <ModalContent>
        <DateForm />
      </ModalContent>
    </Modal>
  );
}
