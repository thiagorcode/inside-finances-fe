import Header from '../../../components/Header';
import { Grid } from '@mui/material';
import { Table } from 'antd';
import MobileMenu from '../../../components/MobileMenu';
import { columns } from './columns';
import { useCallback, useEffect, useState } from 'react';
import { useModal } from '@/context/modal';
import { getTransactionsByParams } from '@/api/transactions/transactions.service';

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
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleOpenModal = () => {
    toggleModal({
      addTransaction: {
        isOpen: true,
      },
    });
  };

  const loadTransactions = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await getTransactionsByParams({
        limit: 50,
        page,
        userId: 'fac56249-feaf-460d-9aa5-37dd6412cdb9',
      });
      console.log(data);

      setTransactions(data.transactions);
      setHasNext(data.transactions.hasNext);
      setPage(value => value + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    loadTransactions();
  }, []);
  return (
    <>
      <Header />
      <Grid>
        <Table
          columns={columns}
          dataSource={transactions}
          loading={loading}
          rowKey="id"
        />
      </Grid>
      <MobileMenu />
    </>
  );
};
