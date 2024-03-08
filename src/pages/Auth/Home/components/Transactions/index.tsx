import { useModal } from '@/context/modal';
import { formatMoney } from '@/utils/formatMoney';
import { ArrowDownwardRounded, ArrowUpwardRounded } from '@mui/icons-material';
import { Box } from '@mui/material';
import * as S from './styles';
import CarouselButton from '../CarouselButton';

interface TransactionsInterface {
  expenseValue?: number;
  recipeValue?: number;
  totalValue?: number;
}

export const Transactions = ({
  expenseValue = 0,
  recipeValue = 0,
  totalValue = 0,
}: TransactionsInterface) => {
  const { toggleModal } = useModal();

  return (
    <Box component="div" sx={{ mt: 5 }}>
      <S.Title>Controle de Gasto</S.Title>

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
          sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}
        >
          <S.Spiral>
            <span>{formatMoney(totalValue)}</span>
            <span>+ 15%</span>
          </S.Spiral>
        </Box>
        <S.BoxTypeValues>
          <div>
            <span>
              <ArrowUpwardRounded />
            </span>
            <span>{formatMoney(recipeValue)}</span>
          </div>
          <div>
            <span>
              <ArrowDownwardRounded />
            </span>
            <span>{formatMoney(expenseValue * -1)}</span>
          </div>
        </S.BoxTypeValues>
      </Box>
      <CarouselButton toggleModal={toggleModal} />
    </Box>
  );
};
