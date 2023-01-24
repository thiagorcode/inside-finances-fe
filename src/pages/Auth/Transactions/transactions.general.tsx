import { useCallback, useEffect, useState } from 'react';
import Header from '../../../components/Header';
import { Grid } from '@mui/material';
import { Table } from 'antd';
import MobileMenu from '../../../components/MobileMenu';
import { columns } from './columns';
import { useModal } from '@/context/modal';
import dayjs from 'dayjs';
import { TransactionCategory } from '@/interface/transactionCategory.interface';
import * as S from './styles';

import { transactionsService } from '@/api/transactions/service';
import { transactionCategoryService } from '@/api/transactionCategory/service';
import { TransactionsCard } from './transactions.card';
import { useUser } from '@/hooks/useUser';
import { ManageTransaction } from '@/components/ManageTransactions';
import { TransactionsFilters } from './transactions.filters';
import { Transactions } from '@/interface/transactions.interface';

export interface InitialValueForm {
  type: string;
  date: dayjs.Dayjs;
  categoryId: number;
  dateFormatted: string | null;
}

export const TransactionsGeneral = () => {
  const { userAccess } = useUser();
  const { modal, toggleModal } = useModal();

  const [transactions, setTransactions] = useState<Transactions[]>([]);
  const [totalizers, setTotalizers] = useState<any>(null);
  // const [hasNext, setHasNext] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const [category, setCategory] = useState<TransactionCategory[]>([]);
  const [categoryFiltered, setCategoryFiltered] = useState<
    TransactionCategory[]
  >([]);

  const initialValueForm = {
    type: '',
    date: dayjs(new Date()),
    categoryId: 0,
    dateFormatted: null,
  };

  const [valueForm, setValueForm] =
    useState<InitialValueForm>(initialValueForm);

  const loadTransactions = useCallback(async () => {
    setLoading(true);
    const { categoryId, dateFormatted, type } = valueForm;
    try {
      const { data } = await transactionsService.listTransactionsByParams({
        limit: 50,
        page,
        userId: userAccess.id!,
        query: {
          ...(categoryId && { categoryId }),
          ...(dateFormatted && { date: dateFormatted }),
          ...(type && { type }),
        },
      });

      setTransactions(data.transactions);
      // setHasNext(data.transactions.hasNext);
      // setPage(value => value + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [page, valueForm]);

  const loadTotalizers = useCallback(async () => {
    const { categoryId, dateFormatted, type } = valueForm;
    try {
      const { data } = await transactionsService.loadTotalizers({
        limit: 0,
        page: 0,
        userId: userAccess.id!,
        query: {
          ...(categoryId && { categoryId }),
          ...(dateFormatted && { date: dateFormatted }),
          ...(type && { type }),
        },
      });

      setTotalizers(data.totalizers);
      // setHasNext(data.transactions.hasNext);
      // setPage(value => value + 1);
    } catch (error) {
      console.log(error);
    }
  }, [page, valueForm, userAccess.id]);
  // está sendo utilizado no add transaction
  const loadCategory = useCallback(async () => {
    try {
      const response = await transactionCategoryService.listCategory();

      if (response.status !== 200) {
        console.log('error');
        return;
      }

      setCategory(response.data.category);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const filterCategory = useCallback(() => {
    const categoryByType = category.filter(
      _category => _category.type === valueForm.type,
    );

    setCategoryFiltered(categoryByType);
  }, [category, valueForm.type]);

  useEffect(() => {
    filterCategory();
  }, [valueForm.type]);

  useEffect(() => {
    loadCategory();
    loadTransactions();
    loadTotalizers();
  }, [valueForm]);

  const handleChangeForm = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValueForm(value => ({
        ...value,
        [event.target.name]: event.target.value,
      }));
    },
    [],
  );

  const handleChangeDateForm = useCallback(
    (date: dayjs.Dayjs | null, dateString: string) => {
      if (!date) return;

      setValueForm(value => ({
        ...value,
        date: date,
        dateFormatted: dateString,
      }));
    },
    [],
  );

  const handleEditTransaction = useCallback(
    (id: string) => {
      toggleModal({
        manageTransaction: {
          isOpen: true,
          data: {
            id,
            afterSaveLoad: () => loadTransactions(),
          },
        },
      });
    },
    [toggleModal, loadTransactions],
  );
  return (
    <>
      <Header />
      <TransactionsCard
        loading={loading}
        recipe={totalizers?.recipe}
        expense={totalizers?.expense}
        totalBalance={totalizers?.totalBalance}
      />

      <TransactionsFilters
        valueForm={valueForm}
        categoryFiltered={categoryFiltered}
        changeDate={handleChangeDateForm}
        changeValueForm={handleChangeForm}
      />
      <Grid style={{ padding: '10px 0 50px 0' }}>
        <S.ContainerTable>
          <Table
            columns={columns}
            dataSource={transactions}
            loading={loading}
            rowKey="id"
            sticky
            onRow={record => {
              return {
                onClick: () => handleEditTransaction(record.id),
              };
            }}
          />
        </S.ContainerTable>
      </Grid>
      <MobileMenu />
      {modal?.manageTransaction?.isOpen && <ManageTransaction />}
    </>
  );
};
