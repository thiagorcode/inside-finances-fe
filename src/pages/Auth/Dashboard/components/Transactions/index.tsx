import { lastTransactions } from '@/api/transactions/service/lastTransactions.service';
import Button from '@/components/Button';
import { useModal } from '@/context/modal';
import { useUser } from '@/hooks/useUser';
import { Transactions as TransactionsProps } from '@/interface/transactions.interface';
import { formatMoney } from '@/utils/formatMoney';
import {
  TextSnippet,
  Add,
  ArrowDownwardRounded,
  ArrowUpwardRounded,
  FastfoodRounded,
  KeyboardArrowDownRounded,
} from '@mui/icons-material';
import { Box } from '@mui/material';
import { message } from 'antd';
import { format, parse } from 'date-fns';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import CarouselButton from '../CarouselButton';
import { width } from '@mui/system';

export const Transactions = () => {
  const { toggleModal, modal } = useModal();
  const { userAccess } = useUser();
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  const loadTransactions = useCallback(async () => {
    try {
      const response = await lastTransactions({
        userId: userAccess.id!,
      });

      // if (response.status !== 200)
      //   throw new Error('Erro ao carregas as últimas transações');

      setTransactions(response.data.transactions);
    } catch (error) {
      message.error('Erro ao buscar as últimas transações');
    }
  }, [userAccess.id]);

  useEffect(() => {
    loadTransactions();
  }, [modal?.addTransaction?.isOpen]);

  const defineColorValue = useCallback(
    (type: string) => (type === '+' ? 'color-recipe' : 'color-expense'),
    [],
  );

  return (
    <>
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
        </Box>
        <CarouselButton toggleModal={toggleModal} />
      </Box>
    </>
  );
};
