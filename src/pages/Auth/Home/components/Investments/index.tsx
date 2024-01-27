import { MovingRounded, TrendingDownRounded } from '@mui/icons-material';
import { Box } from '@mui/material';
import * as S from './styles';

export const Investments = () => {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        mb: 2,
      }}
    >
      <Box
        component="div"
        bgcolor="#2B2E35"
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '50%',
          px: 2.3,
          py: 2,
          borderRadius: 6,
          mr: 0.2,
          height: '100px',
        }}
      >
        <S.FixedIncome>
          <h5>Renda Fixa</h5>
          <div>
            <MovingRounded />
            <span>R$ 1,000.00</span>
          </div>
        </S.FixedIncome>
      </Box>
      <Box
        component="div"
        bgcolor="#2B2E35"
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '50%',
          px: 2.3,
          py: 2,
          borderRadius: 6,
          ml: 0.2,
          height: '100px',
        }}
      >
        <S.VariableIncome>
          <h5>Renda Variável</h5>
          <div>
            <TrendingDownRounded />
            <span>R$ 1,000.00</span>
          </div>
        </S.VariableIncome>
      </Box>
    </Box>
  );
};
