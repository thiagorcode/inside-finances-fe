import { useCallback, useEffect, useState } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import * as ptBr from 'dayjs/locale/pt-br';
import dayjs from 'dayjs';
import * as Yup from 'yup';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { message } from 'antd';

import { Input } from '../../../../../components/Form';
import { FormTransaction } from '../styles';
import { SelectCategory } from '../../../../../components/SelectCategory';
import Button from '@/components/Button';
import { validateMoney } from '@/utils/validateMoney';
import { TransactionCategory } from '@/interface/transactionCategory.interface';
import { DateInput } from './styles';
import { transactionsService } from '@/api/transactions/service';
import { transactionCategoryService } from '@/api/transactionCategory/service';
import { useUser } from '@/hooks/useUser';
import { SelectStatus } from '@/components/SelectStatus';
import { width } from '@mui/system';

interface FormProps {
  setStep: (value: 0 | 1) => void;
}

interface InitialValuesForm {
  type: string;
  description: string;
  category: string;
  value: string;
  date: dayjs.Dayjs;
  bank: string;
  isPaid: boolean;
  installment: number;
  finalInstallment: number;
}

const initialValues = {
  type: '',
  description: '',
  category: '',
  value: '',
  date: dayjs(new Date()),
  bank: '',
  isPaid: true,
  installment: 0,
  finalInstallment: 0,
};

const validationSchema = Yup.object().shape({
  type: Yup.string().required('Campo obrigatório'),
  description: Yup.string(),
  category: Yup.string().required('Seleção obrigatória'),
  isPaid: Yup.boolean().required('Seleção obrigatória'),
  bank: Yup.string(),
  installment: Yup.number(),
  finalInstallment: Yup.number(),
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
  const { userAccess } = useUser();

  const [category, setCategory] = useState<TransactionCategory[]>([]);
  const [categoryFiltered, setCategoryFiltered] = useState<
    TransactionCategory[]
  >([]);

  const onSubmit = async (
    values: InitialValuesForm,
    helper: FormikHelpers<typeof initialValues>,
  ) => {
    try {
      console.log(values);
      const response = await transactionsService.createTransaction({
        ...values,
        originCreate: 'web',
        categoryId: values.category,
        userId: userAccess.id!,
        value: +values.value.replace(',', '.'),
      });

      if (response.status !== 201) throw new Error('Erro ao criar transação!');

      helper.resetForm();
      setStep(1);
    } catch (error) {
      message.error(String(error));
    }
  };

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
   
    {/** usar depois */}  {/**

      <Input
        label="Tipo:"
        name="type"
        error={formik.errors.type}
        onChange={formik.handleChange}
      >
        <select>
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

 {/** usar depois */}  {/**
      <Input
        label="Valor:"
        placeholder="R$ 99,99"
        name="value"
        error={formik.errors.value}
        onChange={formik.handleChange}
      />
      <Input
        label="Banco:"
        placeholder="Inter"
        name="bank"
        error={formik.errors.bank}
        onChange={formik.handleChange}
      />
      {formik.values.type === '-' && (
        <>
          <Input
            label="Parcela Inicial:(opcional)"
            placeholder="1"
            name="installment"
            error={formik.errors.installment}
            onChange={formik.handleChange}
          />
          <Input
            label="Parcela final:(opcional)"
            placeholder="4"
            name="finalInstallment"
            error={formik.errors.finalInstallment}
            onChange={formik.handleChange}
          />
        </>
      )}

      <SelectStatus
        name="isPaid"
        setFieldValue={formik.setFieldValue}
        error={formik.errors.isPaid}
        value={formik.values.isPaid}
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
     
      <Button style={{width:'295px', height:'53px'}}
        types='primary'
        > Proximo</Button>
    </FormTransaction>
  );
};
