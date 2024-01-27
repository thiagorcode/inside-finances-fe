import Button from '@/components/Button';
import { useModal } from '@/context/modal';
import { Box } from '@mui/system';
import * as S from './styles';

export const Success = () => {
  const { toggleModal } = useModal();

  const handleCloseModal = () => {
    toggleModal({
      addTransaction: {
        isOpen: false,
      },
    });
  };
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        alignSelf: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          height: '100%',
          marginTop: '25px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* <S.Image src="assets/svg/savetransaction.svg" alt="Transação salva" /> */}
          <h2>Transação salva com sucesso.</h2>
        </Box>
        <S.GroupButton>
          <Button
            type="button"
            // onClick={() => setStep(0)}
            size="large"
          >
            Adicionar Novo
          </Button>
          <Button type="button" onClick={handleCloseModal} size="large">
            Fechar
          </Button>
        </S.GroupButton>
      </Box>
    </Box>
  );
};
