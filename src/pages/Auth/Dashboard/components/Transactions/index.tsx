import { lastTransactions } from '@/api/transactions/service/lastTransactions.service';
import Button from '@/components/Button';
import { useModal } from '@/context/modal';
import { Transactions as TransactionsProps } from '@/interface/transactions.interface';
import { formatMoney } from '@/utils/formatMoney';
import {
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
import * as S from './styles';

export const Transactions = () => {
  const { toggleModal } = useModal();
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  const handleOpenModal = (key: string) => {
    toggleModal({
      [key]: {
        isOpen: true,
      },
    });
  };

  const loadTransactions = useCallback(async () => {
    try {
      const response = await lastTransactions({
        userId: 'fac56249-feaf-460d-9aa5-37dd6412cdb9',
      });

      if (response.status !== 200)
        throw new Error('Erro ao carregas as últimas transações');

      setTransactions(response.data.transactions);
    } catch (error) {
      message.error('Erro ao buscar as últimas transações');
    }
  }, []);

  useEffect(() => {
    loadTransactions();
  }, []);

  const defineColorValue = useCallback(
    (type: '+' | '-') => (type === '+' ? 'color-recipe' : 'color-expense'),
    [],
  );

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
        {transactions.map(transaction => (
          <div key={transaction.id}>
            <FastfoodRounded />
            <span className="text-category">{transaction.category.name}</span>
            <S.Details>
              <span className={defineColorValue(transaction.type)}>
                {formatMoney(transaction.value)}
              </span>
              <span className="box-date">
                {format(
                  parse(transaction.date, 'yyyy-MM-dd', new Date()),
                  'dd/MM/yyyy',
                )}
              </span>
            </S.Details>
          </div>
        ))}

        <button type="button">
          <KeyboardArrowDownRounded />
        </button>
      </S.Resume>
    </Box>
  );
};
