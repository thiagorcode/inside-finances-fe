import { SetStateAction, useCallback, useEffect, useState } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import * as ptBr from 'dayjs/locale/pt-br';
import dayjs from 'dayjs';
import * as Yup from 'yup';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { message } from 'antd';
import { ContainerCategorys, FormTransaction } from '../styles';
import { SelectCategory } from '../../../../../components/SelectCategory';
import Button from '@/components/Button';
import { validateMoney } from '@/utils/validateMoney';
import { TransactionCategory } from '@/interface/transactionCategory.interface';
import {
  ButtonDesp,
  ButtonRece,
  ContainerCategory,
  Label,
  TitleCategory,
  ContentOptions,
} from './styles';
import { transactionsService } from '@/api/transactions/service';
import { transactionCategoryService } from '@/api/transactionCategory/service';
import { useUser } from '@/hooks/useUser';
import { SelectStatus } from '@/components/SelectStatus';
import { Payments, ProductionQuantityLimits } from '@mui/icons-material';
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
  const [categoryInit, setCategoryInit] = useState('');
  const [categoryFiltered, setCategoryFiltered] = useState<
    TransactionCategory[]
  >([]);
  const [steppage, SetStepPage] = useState(0);
  
  const datas = [
    {
      id: '05094f4b-f0eb-460d-bd79-d36fb63f86f5',
      name: 'Contas',
      icon: 'Receipt',
      type: '-',
    },
    {
      id: '0e13f258-ea8f-422c-aefd-185b1c9a73fc',
      icon: '""',
      name: 'Transferência',
      type: '+',
    },
    {
      id: '1582f89e-77ed-4b1f-8e4e-82471e9a6e0b',
      icon: 'Receipt',
      name: 'Educação',
      type: '-',
    },
    {
      id: '4329373a-f409-453f-98d2-815262ecc6e7',
      icon: 'Receipt',
      name: 'Dividendos',
      type: '+',
    },
    {
      id: '0d29d8da-8db8-4c78-bb61-60cdea046465',
      icon: '',
      name: 'Pet',
      type: '-',
    },
    {
      id: '4757f2e1-4464-49bf-b873-9f1e4870c856',
      icon: 'Receipt',
      name: 'Alimentação',
      type: '-',
    },
    {
      id: '487515eb-101d-4d6d-96d2-eff8eb8a27f7',
      icon: '""',
      name: 'Música',
      type: '-',
    },
    {
      id: '08da2204-05c5-4124-a95f-7d944b5c7435',
      icon: 'Checkroom',
      name: 'Vestuário',
      type: '-',
    },
  ];
  
  const filterData = datas.filter(date => date.type === categoryInit)


  const onSubmit = async (
    values: InitialValuesForm,
    helper: FormikHelpers<typeof initialValues>,
  ) => {
    try {
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

  function HandleCategory(type: SetStateAction<string>) {
    setCategoryInit(type);
  }

  function StepNexthandle() {
    SetStepPage(cur => cur + 1);
  }


  
  
  return (
    <FormTransaction onSubmit={formik.handleSubmit}>
      {/* Alterar o type para uma tela inicial com dois botões um de despesa outro de receita */}
      {/** Separa cada input em uma etapa do form */}
      {steppage === 0 && (
        <ContainerCategory>
          <ButtonRece type="button" onClick={() => HandleCategory('+')}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '100px',
                gap: '10px',
              }}
            >
              <Payments
                sx={{ color: 'white', marginLeft: '10px', fontSize: 55 }}
              />
              <Label> Receita</Label>
            </div>
          </ButtonRece>
          <ButtonDesp type="button" onClick={() => HandleCategory('-')}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '100px',
                gap: '10px',
              }}
            >
              <ProductionQuantityLimits
                sx={{ color: 'white', marginLeft: '20px', fontSize: 55 }}
              />
              <Label> Despesas</Label>
            </div>
          </ButtonDesp>
        </ContainerCategory>
      )}
      {steppage === 1 && (
        <>
          <div>
            <TitleCategory>Categoria:</TitleCategory>
          </div>
          {filterData.map(date => (
            <ContentOptions key={date.id}>
              <div
                style={{
                  display:'flex',
                  flexDirection:"column",
                  alignItems:'center',
                  marginTop:'5px',
                }} >
              <span>Ola</span>
              <label>{date.name}</label>
              </div>
            </ContentOptions>
          ))}
        </>
      )}

      <Button
        style={{
          width: '295px',
          height: '53px',
          marginLeft: '28px',
          marginTop: '70px',
        }}
        types="primary"
        onClick={StepNexthandle}
      >
        Proximo
      </Button>
      {/** usar depois */}
      {/**

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
      {/** usar depois */}{' '}
      {/**
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
      {/** usar depois */}{' '}
      {/**
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
    </FormTransaction>
  );
};
