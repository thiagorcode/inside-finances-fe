import Button from '@/components/Button';
import { useModal } from '@/context/modal';
import {
  Add,
  ArrowDownwardRounded,
  ArrowUpwardRounded,
  FastfoodRounded,
  KeyboardArrowDownRounded,
} from '@mui/icons-material';
import { Box } from '@mui/material';
import * as S from './styles';

export const Transactions = () => {
  const { toggleModal } = useModal();

  const handleOpenModal = (key: string) => {
    toggleModal({
      [key]: {
        isOpen: true,
      },
    });
  };

  return (
    <Box
      component="div"
      bgcolor="#2B2E35"
      sx={{
        display: 'block',
        px: 2.3,
        py: 2,
        mb: 2,

        borderRadius: 6,
      }}
    >
      <Box
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Usar Typografh */}
        <h2>Controle de Gasto</h2>
        <Button
          type="button"
          onClick={() => handleOpenModal('addTransaction')}
          size="small"
        >
          <Add />
        </Button>
      </Box>
      <Box
        component="div"
        sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}
      >
        <S.Spiral>
          <span>R$ 1,000.00</span>
          <span>+ 15%</span>
        </S.Spiral>
      </Box>
      <S.BoxTypeValues>
        <div>
          <span>
            <ArrowUpwardRounded />
          </span>
          <span>R$ 2,000.00</span>
        </div>
        <div>
          <span>
            <ArrowDownwardRounded />
          </span>
          <span>R$ 1,000.00</span>
        </div>
      </S.BoxTypeValues>
      <S.Resume>
        <div>
          <FastfoodRounded />
          <span>Comida</span>
          <span>08/10/2021</span>
          <span>R$ 50,00</span>
        </div>
        <div>
          <FastfoodRounded />
          <span>Comida</span>
          <span>08/10/2021</span>
          <span>R$ 50,00</span>
        </div>
        <div>
          <FastfoodRounded />
          <span>Comida</span>
          <span>08/10/2021</span>
          <span>R$ 50,00</span>
        </div>
        <div>
          <FastfoodRounded />
          <span>Comida</span>
          <span>08/10/2021</span>
          <span>R$ 50,00</span>
        </div>
        <div>
          <FastfoodRounded />
          <span>Comida</span>
          <span>08/10/2021</span>
          <span>R$ 50,00</span>
        </div>
        <div>
          <FastfoodRounded />
          <span>Comida</span>
          <span>08/10/2021</span>
          <span>R$ 50,00</span>
        </div>
        <div>
          <FastfoodRounded />
          <span>Comida</span>
          <span>08/10/2021</span>
          <span>R$ 50,00</span>
        </div>
        <div>
          <FastfoodRounded />
          <span>Comida</span>
          <span>08/10/2021</span>
          <span>R$ 50,00</span>
        </div>
        <button>
          <KeyboardArrowDownRounded />
        </button>
      </S.Resume>
    </Box>
  );
};
