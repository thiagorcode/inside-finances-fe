import Button from '@/components/Button';
import {
  Add,
  KeyboardArrowDownRounded,
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
  MovingRounded,
  TrendingDownRounded,
} from '@mui/icons-material';
import { Box } from '@mui/material';
import * as S from './styles';

export const Cards = () => {
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
          display: 'block',
        }}
      >
        <h2>Cartões</h2>
      </Box>
      <Box
        component="div"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 1,
          mb: 1,
          alignItems: 'center',
        }}
      >
        <button type="button">
          <KeyboardArrowLeftRounded style={{ color: '#949499' }} />
        </button>
        <S.Card>
          <p>**** **** **** 4555</p>
          <div>
            <span>Dono do Cartão</span>
            <p>Thiago Rodrigues</p>
          </div>
        </S.Card>
        <button type="button">
          <KeyboardArrowRightRounded style={{ color: '#949499' }} />
        </button>
      </Box>
      <S.Balance>
        <div>
          <h6>Card Balance</h6>
          <span>R$ 4,250.00</span>
        </div>
        <Button type="button" onClick={() => alert('Teste')}>
          <Add />
        </Button>
      </S.Balance>

      <S.ResumeCard>
        <div>
          <div>
            <div>
              <S.ResumeCardBox>L</S.ResumeCardBox>
            </div>
            <S.ResumeTypeBuy>
              <span>Livraria</span>
              <span>24 Junho, 23:42</span>
            </S.ResumeTypeBuy>
          </div>
          <div>
            <p>R$ 1,000.00</p>
          </div>
        </div>
        <KeyboardArrowDownRounded />
      </S.ResumeCard>
    </Box>
  );
};
