import { format } from 'date-fns';
import { FormikHelpers, useFormik } from 'formik';
import { Input } from '../../../../../components/Form';
import { FormTransaction } from '../../styles';
import * as Yup from 'yup';
import { Category } from '../Category';
import Button from '@/components/Button';
import * as dayjs from 'dayjs';
import * as ptBr from 'dayjs/locale/pt-br';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { validateMoney } from '@/utils/validateMoney';
import { TextField } from '@mui/material';
import styled from 'styled-components';
import { useCallback, useEffect, useMemo, useState } from 'react';
import transactionCategoryService from '@/services/transactionCategory/transactionCategory.service';
import { TransactionCategory } from '@/interface/transactionCategory.interface';

const DateInput = styled.div`
  .MuiPickerStaticWrapper-content {
    background-color: #2b2e35;
  }
  .MuiButtonBase-root {
    background-color: #2b2e35;
    color: #fff;
    font-weight: bold;
  }
  .MuiTypography-root {
    color: #fff;
    font-weight: bold;
  }

  .Mui-selected {
    background-color: #233dc7 !important;
  }
`;
interface FormProps {
  setStep: (value: 0 | 1) => void;
}

const initialValues = {
  type: '',
  description: '',
  category: '',
  value: null,
  date: dayjs('2022-10-07'),
};

const validationSchema = Yup.object().shape({
  type: Yup.string().required('Campo obrigatório'),
  description: Yup.string(),
  category: Yup.string().required('Seleção obrigatória'),
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

  const onSubmit = (
    values: typeof initialValues,
    helper: FormikHelpers<typeof initialValues>,
  ) => {
    console.log(values);

    setStep(1);
  };

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
  }, [formik.values.type, category]);

  useEffect(() => {
    filterCategory();
  }, [formik.values.type]);

  return (
    <FormTransaction onSubmit={formik.handleSubmit}>
      {/* ALterar o type para uma tela inicial com dois botões um de despesa outro de receita */}
      {/** Separa cada inout em uma etapa do form */}
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
        {/* Inseri erro do YUP */}
      </DateInput>

      {/* <Input label="Pagamento:" placeholder="Cartão ou Avista" /> */}
      <Button size="large" type="submit">
        Salvar
      </Button>
    </FormTransaction>
  );
};
