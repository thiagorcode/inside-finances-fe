import Button from '@/components/Button';
import { useModal } from '@/context/modal';
import { getTransactionsByParams } from '@/services/transactions/transactions.service';
import {
  Add,
  ArrowDownwardRounded,
  ArrowUpwardRounded,
  FastfoodRounded,
  KeyboardArrowDownRounded,
} from '@mui/icons-material';
import { Box, CircularProgress } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import * as S from './styles';

export const Transactions = () => {
  const { toggleModal } = useModal();

  const [transactions, setTransactions] = useState<any[]>([]);
  const [hasNext, setHasNext] = useState(false);
  const [page, setPage] = useState(1);

  const handleOpenModal = () => {
    toggleModal({
      addTransaction: {
        isOpen: true,
      },
    });
  };

  const loadTransactions = useCallback(async () => {
    try {
      const { data } = await getTransactionsByParams({
        limit: 50,
        page,
        userId: 'fff',
      });
      console.log(data);

      setTransactions(value => [...value, ...data.transactions.transactions]);
      setHasNext(data.transactions.hasNext);
      setPage(value => value + 1);
    } catch (error) {
      console.log(error);
    }
  }, [page]);

  useEffect(() => {
    loadTransactions();
  }, []);

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
        <Button type="button" onClick={() => handleOpenModal()} size="small">
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
      <InfiniteScroll
        dataLength={transactions.length}
        next={loadTransactions}
        hasMore={hasNext}
        loader={<CircularProgress color="secondary" />}
        style={
          hasNext && {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }
        }
      >
        <S.Resume>
          <div>
            <FastfoodRounded />
            <S.Details>
              <span>Comida</span>

              <div>
                <span>R$ 50,00</span>
                <span>08/10/2021</span>
              </div>
            </S.Details>
          </div>
          <button>
            <KeyboardArrowDownRounded />
          </button>
        </S.Resume>
      </InfiniteScroll>
    </Box>
  );
};
