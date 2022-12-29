import Header from '../../../components/Header';
import { Grid } from '@mui/material';
import { Table } from 'antd';
import MobileMenu from '../../../components/MobileMenu';
import { columns } from './columns';
import { useCallback, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useModal } from '@/context/modal';
import { getTransactionsByParams } from '@/services/transactions/transactions.service';

const data = [
  {
    key: 1,
    category: 'Pagamento',
    value: 'R$ 120,00',
    date: '14/05/2023',
    type: 'Entrada',
  },
];

export const TransactionsGeneral = () => {

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
    <>
      <Header />
      <Grid>
        <Table columns={columns} dataSource={data} />
      </Grid>
      <MobileMenu />
    </>
  );
};
