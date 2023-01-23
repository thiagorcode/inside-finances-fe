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
import { useUser } from '@/hooks/useUser';
import { useModal } from '@/context/modal';
import { Loading } from '@/components/Loading';
import { SelectStatus } from '@/components/SelectStatus';

interface InitialValuesForm {
  type: string;
  description: string;
  category: string;
  value: string;
  date: dayjs.Dayjs;
  bank: string;
}

const initialValues = {
  type: '',
  description: '',
  category: '',
  value: '',
  date: dayjs(new Date()),
  bank: '',
};

const validationSchema = Yup.object().shape({
  type: Yup.string().required('Campo obrigatório'),
  description: Yup.string(),
  category: Yup.string().required('Seleção obrigatória'),
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
  const { userAccess } = useUser();
  const { toggleModal, modal } = useModal();
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
    try {
      const response = await transactionsService.createTransaction({
        ...values,
        userId: userAccess.id!,
        value: values.value?.replace(',', '.'),
      });

      if (response.status !== 201) throw new Error('Erro ao criar transação!');

      helper.resetForm();
      toggleModal({
        manageTransaction: {
          isOpen: false,
        },
      });
    } catch (error) {
      message.error(String(error));
    }
  };

  const loadTransaction = useCallback(async () => {
    const transactionId: string | undefined = modal.manageTransaction?.data?.id;

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
      console.log(transaction);
      setInitialValuesForm({
        bank: transaction.bank,
        date: dayjs(transaction.date),
        type: transaction.type,
        category: transaction.categoryId,
        description: transaction.description,
        value: transaction.value.toLocaleString('pt-br', {
          minimumFractionDigits: 2,
        }),
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

  console.log(formik.values);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <FormTransaction onSubmit={formik.handleSubmit}>
      {/* Alterar o type para uma tela inicial com dois botões um de despesa outro de receita */}
      {/** Separa cada input em uma etapa do form */}

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
          name="category"
          error={formik.errors.category}
          setFieldValue={formik.setFieldValue}
          values={formik.values}
          category={categoryFiltered}
        />
      )}

      {/** TODO: Create sugest Value - 20,00 / MED */}
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
      <SelectStatus />
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

      <Button size="large" type="submit">
        Salvar
      </Button>
    </FormTransaction>
  );
};
