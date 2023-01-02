import Header from '../../../components/Header';
import { Grid } from '@mui/material';
import { Space, Table } from 'antd';
import MobileMenu from '../../../components/MobileMenu';
import { columns } from './columns';
import { useCallback, useEffect, useState } from 'react';
import { useModal } from '@/context/modal';
import { getTransactionsByParams } from '@/api/transactions/transactions.service';
import { Input } from '@/components/Form';

const initialValueForm = {
  type: '',
  date: '',
};

export const TransactionsGeneral = () => {
  const { toggleModal } = useModal();

  const [transactions, setTransactions] = useState<any[]>([]);
  const [hasNext, setHasNext] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const [valueForm, setValueForm] = useState(initialValueForm);

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
        // TODO; Alterar
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

  const handleChangeForm = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValueForm(value => ({
        ...value,
        [event.target.name]: event.target.value,
      }));
    },
    [],
  );
  return (
    <>
      <Header />

      <Space
        direction="vertical"
        size="middle"
        style={{ display: 'flex', padding: '0 15px' }}
      >
        <Input label="Tipo:" name="type" onChange={handleChangeForm}>
          <select>
            <option value="">Selecione</option>
            <option value="+">Receita</option>
            <option value="-">Despesa</option>
          </select>
        </Input>
      </Space>
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
