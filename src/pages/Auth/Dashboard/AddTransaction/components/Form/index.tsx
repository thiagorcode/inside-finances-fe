import { useCallback, useEffect, useState } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import * as ptBr from 'dayjs/locale/pt-br';
import * as dayjs from 'dayjs';
import * as Yup from 'yup';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { message } from 'antd';

import { Input } from '../../../../../../components/Form';
import { FormTransaction } from '../../styles';
import { Category } from '../Category';
import Button from '@/components/Button';
import { validateMoney } from '@/utils/validateMoney';
import transactionCategoryService from '@/api/transactionCategory/transactionCategory.service';
import { TransactionCategory } from '@/interface/transactionCategory.interface';
import { DateInput } from './styles';
import { postCreateTransaction } from '@/api/transactions/transactions.service';
import { useModal } from '@/context/modal';

interface FormProps {
  setStep: (value: 0 | 1) => void;
}

const initialValues = {
  type: '',
  description: '',
  category: 0,
  value: null,
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

export const Form = ({ setStep }: FormProps) => {
  const [category, setCategory] = useState<TransactionCategory[]>([]);
  const [categoryFiltered, setCategoryFiltered] = useState<
    TransactionCategory[]
  >([]);

  const onSubmit = async (
    values: typeof initialValues,
    helper: FormikHelpers<typeof initialValues>,
  ) => {
    try {
      const response = await postCreateTransaction(values);

      if (response.status !== 201) throw new Error('Erro ao criar transação!');

      helper.resetForm();
      setStep(1);
    } catch (error) {
      message.error(String(error));
    }
  };

  const loadCategory = useCallback(async () => {
    try {
      const response = await transactionCategoryService.findAll();

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
    loadCategory();
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onSubmit,
  });

  const filterCategory = useCallback(() => {
    formik.setFieldValue('category', '');

    const selectedType = formik.values.type;
    const categoryByType = category.filter(
      _category => _category.type === selectedType,
    );

    setCategoryFiltered(categoryByType);
  }, [formik, category]);

  useEffect(() => {
    filterCategory();
  }, [formik.values.type]);

  return (
    <FormTransaction onSubmit={formik.handleSubmit}>
      {/* Alterar o type para uma tela inicial com dois botões um de despesa outro de receita */}
      {/** Separa cada input em uma etapa do form */}
      <Input
        label="Tipo:"
        name="type"
        error={formik.errors}
        onChange={formik.handleChange}
      >
        <select>
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
        error={formik.errors}
        onChange={formik.handleChange}
      />
      {!!categoryFiltered.length && (
        <Category
          name="category"
          error={formik.errors}
          setFieldValue={formik.setFieldValue}
          values={formik.values}
          category={categoryFiltered}
        />
      )}

      {/** TODO: Create sugest Value - 20,00 / MED */}

      <Input
        label="Valor:"
        placeholder="R$ 99,99"
        name="value"
        error={formik.errors}
        onChange={formik.handleChange}
      />
      <Input
        label="Banco:"
        placeholder="Inter"
        name="bank"
        error={formik.errors}
        onChange={formik.handleChange}
      />
      <DateInput>
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
      </DateInput>
      {/* Inseri erro do YUP */}

      {/* <Input label="Pagamento:" placeholder="Cartão ou Avista" /> */}
      <Button size="large" type="submit">
        Salvar
      </Button>
    </FormTransaction>
  );
};
