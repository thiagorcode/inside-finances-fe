import { useCallback, useEffect, useState } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import * as ptBr from 'dayjs/locale/pt-br';
import dayjs from 'dayjs';
import * as Yup from 'yup';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { message, Switch } from 'antd';

import { Input } from '../../../components/Form';
import { FormTransaction } from '../styles';
import { SelectCategory } from '../../../components/SelectCategory';
import Button from '@/components/Button';
import { validateMoney } from '@/utils/validateMoney';
import { TransactionCategory } from '@/interface/transactionCategory.interface';
import * as S from './styles';
import { transactionsService } from '@/api/transactions/service';
import { transactionCategoryService } from '@/api/transactionCategory/service';
import { useModal } from '@/context/modal';
import { Loading } from '@/components/Loading';
import { SelectStatus } from '@/components/SelectStatus';

interface InitialValuesForm {
  type: string;
  description: string;
  categoryId: string;
  value: string;
  date: dayjs.Dayjs | string;
  bank: string;
  isPaid: boolean;
}

const initialValues = {
  type: '',
  description: '',
  categoryId: '',
  value: '',
  date: dayjs(new Date()),
  bank: '',
  isPaid: true,
};

const validationSchema = Yup.object().shape({
  type: Yup.string().required('Campo obrigatório'),
  description: Yup.string(),
  categoryId: Yup.string().required('Seleção obrigatória'),
  isPaid: Yup.boolean().required('Seleção obrigatória'),
  bank: Yup.string(),
  value: Yup.string()
    .test({
      name: 'isMoney',
      message: 'Valor inválido',
      test: (value, context) => validateMoney(value),
    })
    .required('Campo obrigatório'),
  date: Yup.date().required('Campo obrigatório'),
});

export const Form = () => {
  const { toggleModal, modal } = useModal();

  const afterSaveLoad = modal.manageTransaction?.data?.afterSaveLoad;
  const transactionId = modal.manageTransaction?.data?.id;

  const [isLoading, setIsLoading] = useState(true);
  const [initialValuesForm, setInitialValuesForm] =
    useState<InitialValuesForm>(initialValues);

  const [category, setCategory] = useState<TransactionCategory[]>([]);
  const [categoryFiltered, setCategoryFiltered] = useState<
    TransactionCategory[]
  >([]);

  const onSubmit = async (
    values: InitialValuesForm,
    helper: FormikHelpers<InitialValuesForm>,
  ) => {
    console.log(values);
    try {
      const response = await transactionsService.updateTransaction(
        transactionId,
        {
          ...values,
          date: dayjs(values.date).format('YYYY-MM-DD'),
          value: +values.value?.replace(',', '.'),
        },
      );

      if (response.status !== 200) throw new Error('Erro ao editar transação!');

      if (afterSaveLoad) {
        afterSaveLoad();
      }

      helper.resetForm();

      toggleModal({
        manageTransaction: {
          isOpen: false,
        },
      });
    } catch (error) {
      message.error('Erro ao editar!');
    }
  };

  const loadTransaction = useCallback(async () => {
    if (!transactionId) {
      message.error('Id não foi selecionado');
      return;
    }

    try {
      setIsLoading(true);
      const response = await transactionsService.findOneTransaction({
        id: transactionId,
      });
      const transaction = response.data.transaction;

      const formatedValueMoney = transaction.value
        .toLocaleString('pt-br', {
          minimumFractionDigits: 2,
        })
        .replace('.', '');

      setInitialValuesForm({
        bank: transaction.bank,
        date: dayjs(transaction.date),
        type: transaction.type,
        categoryId: transaction.categoryId,
        description: transaction.description,
        value: formatedValueMoney,
        isPaid: transaction.isPaid,
      });
    } catch (error) {
      message.error('Erro inesperado!');
    } finally {
      setIsLoading(false);
    }
  }, [modal.manageTransaction?.data?.id]);

  const loadCategory = useCallback(async () => {
    try {
      const response = await transactionCategoryService.listCategory();

      if (response.status !== 200) {
        message.error('Erro ao carregar as categorias!');
        return;
      }

      setCategory(response.data.category);
    } catch (error) {
      message.error('Erro ao carregar as categorias!');
    }
  }, []);

  useEffect(() => {
    loadTransaction();
    loadCategory();
  }, []);

  const formik = useFormik({
    initialValues: initialValuesForm,
    validationSchema,
    onSubmit: onSubmit,
    enableReinitialize: true,
  });

  const filterCategory = useCallback(() => {
    const selectedType = formik.values.type;
    const categoryByType = category.filter(
      _category => _category.type === selectedType,
    );

    setCategoryFiltered(categoryByType);
  }, [formik, category]);

  useEffect(() => {
    filterCategory();
  }, [formik.values.type]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <FormTransaction onSubmit={formik.handleSubmit}>
      {/* Alterar o type para uma tela inicial com dois botões um de despesa outro de receita */}
      {/** Separa cada input em uma etapa do form */}
     
    {/** usar depois */}  {/**
      <Input
        label="Tipo:"
        name="type"
        error={formik.errors.type}
        onChange={formik.handleChange}
      >
        <select value={formik.values.type}>
          <option value="">Selecione</option>
          <option value="+">Receita</option>
          <option value="-">Despesa</option>
        </select>
      </Input>

      {/** TODO: Alterar o placeholder quando ele for despesa ou receita */}
       {/** usar depois */}  {/**
      <Input
        label="Descrição:"
        placeholder="Alimentação, Salário, Conta"
        name="description"
        error={formik.errors.description}
        onChange={formik.handleChange}
        value={formik.values.description}
      />
      {!!categoryFiltered.length && (
        <SelectCategory
          name="categoryId"
          error={formik.errors.categoryId}
          setFieldValue={formik.setFieldValue}
          values={formik.values}
          category={categoryFiltered}
        />
      )}

      {/** TODO: Create sugest Value - 20,00 / MED */}
       {/** usar depois */}  {/**
      <Input
        label="Banco:"
        placeholder="Inter"
        name="bank"
        error={formik.errors.bank}
        onChange={formik.handleChange}
        value={formik.values?.bank}
      />
      <Input
        label="Valor:"
        placeholder="R$ 99,99"
        name="value"
        error={formik.errors.value}
        onChange={formik.handleChange}
        value={formik.values?.value}
      />
      <SelectStatus
        name="isPaid"
        setFieldValue={formik.setFieldValue}
        error={formik.errors.isPaid}
        value={formik.values.isPaid}
      />
      <S.DateInput>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={ptBr}>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            openTo="month"
            value={formik.values.date}
            views={['year', 'month', 'day']}
            onChange={newValue => {
              formik.setFieldValue('date', dayjs(newValue));
            }}
            renderInput={params => <TextField {...params} />}
          />
        </LocalizationProvider>
      </S.DateInput>
      {/* Inseri erro do YUP */}

      {/* <Input label="Pagamento:" placeholder="Cartão ou Avista" /> */}

   
    </FormTransaction>
  );
};
