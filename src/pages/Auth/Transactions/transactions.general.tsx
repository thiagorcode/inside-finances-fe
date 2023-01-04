import Header from '../../../components/Header';
import { Grid } from '@mui/material';
import { DatePicker, Space, Table } from 'antd';
import MobileMenu from '../../../components/MobileMenu';
import { columns } from './columns';
import { useCallback, useEffect, useState } from 'react';
import { useModal } from '@/context/modal';
import { getTransactionsByParams } from '@/api/transactions/transactions.service';
import { Input } from '@/components/Form';
import * as dayjs from 'dayjs';
import { TransactionCategory } from '@/interface/transactionCategory.interface';
import transactionCategoryService from '@/api/transactionCategory/transactionCategory.service';
import * as S from './styles';
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from '@mui/icons-material';

const initialValueForm = {
  type: '',
  date: dayjs(new Date()),
  categoryId: 0,
  dateFormatted: '',
};

export const TransactionsGeneral = () => {
  const { toggleModal } = useModal();

  const [transactions, setTransactions] = useState<any[]>([]);
  const [hasNext, setHasNext] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const [category, setCategory] = useState<TransactionCategory[]>([]);
  const [categoryFiltered, setCategoryFiltered] = useState<
    TransactionCategory[]
  >([]);
  const [valueForm, setValueForm] = useState(initialValueForm);

  const [isHideFilter, setIsHideFilter] = useState(true);

  const handleOpenModal = () => {
    toggleModal({
      addTransaction: {
        isOpen: true,
      },
    });
  };

  const loadTransactions = useCallback(async () => {
    setLoading(true);
    const { categoryId, dateFormatted, type } = valueForm;
    try {
      const { data } = await getTransactionsByParams({
        limit: 50,
        page,
        // TODO; Alterar
        userId: 'fac56249-feaf-460d-9aa5-37dd6412cdb9',
        query: {
          ...(categoryId && { categoryId }),
          ...(dateFormatted && { date: dateFormatted }),
          ...(type && { type }),
        },
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
  }, [page, valueForm]);

  // está sendo utilizado no add transaction
  const loadCategory = useCallback(async () => {
    try {
      const response = await transactionCategoryService.findAll();

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
    (date: dayjs.Dayjs, dateString: string) => {
      console.log(dateString);
      setValueForm(value => ({
        ...value,
        date: date,
        dateFormatted: dateString,
      }));
    },
    [],
  );

  const handleToggleHideFilter = useCallback(() => {
    setIsHideFilter(value => !value);
  }, []);

  return (
    <>
      <Header />

      <S.ContainerFilters>
        <Space
          direction="vertical"
          size="middle"
          style={{
            display: 'flex',
            maxHeight: isHideFilter ? 0 : '300px',
            overflow: 'hidden',
            transition: 'max-height 0.4s ease-out',
          }}
        >
          <Input label="Tipo:" name="type" onChange={handleChangeForm}>
            <select>
              <option value="">Selecione</option>
              <option value="+">Receita</option>
              <option value="-">Despesa</option>
            </select>
          </Input>
          {!!valueForm.type && (
            <Input
              label="Categoria:"
              name="categoryId"
              onChange={handleChangeForm}
            >
              <select>
                <option value="">Selecione</option>
                {categoryFiltered.map(_category => (
                  <option key={_category.id} value={_category.id}>
                    {_category.name}
                  </option>
                ))}
              </select>
            </Input>
          )}
          <S.ContainerDate>
            <Input label="Data:" name="date">
              <DatePicker
                onChange={handleChangeDateForm}
                placeholder=""
                picker="month"
                value={valueForm.date}
              />
            </Input>
          </S.ContainerDate>
        </Space>
        {isHideFilter ? (
          <button type="button" onClick={handleToggleHideFilter}>
            <KeyboardArrowDownRounded style={{ color: '#fff' }} />
          </button>
        ) : (
          <button type="button" onClick={handleToggleHideFilter}>
            <KeyboardArrowUpRounded style={{ color: '#fff' }} />
          </button>
        )}
      </S.ContainerFilters>

      <Grid style={{ padding: '10px 0 50px 0' }}>
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
