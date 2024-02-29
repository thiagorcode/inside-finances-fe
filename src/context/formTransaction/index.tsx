import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import dayjs from 'dayjs';
import { InitialValuesFormTransaction } from '@/interface/initialValueFormTransaction.interface';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { validateMoney } from '@/utils/validateMoney';

type SelectTypeTransaction = '+' | '-';
interface FormTransactionContextProps {
  currentStep: number;
  formValues: InitialValuesFormTransaction;
  onChangeType: (type: SelectTypeTransaction) => void;
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  nextStep: () => void;
  isCategorySelected: () => boolean;
}

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

const MAX_STEP = 2;

const FormTransactionContext = createContext({} as FormTransactionContextProps);

const FormTransactionProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formValues, setFormValues] = useState({ type: null });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => console.log(values),
  });

  const onChangeType = (typeValue: SelectTypeTransaction) => {
    formik.setFieldValue('type', typeValue);
  };

  const handleChangeCategory = (categoryValue: string) => {
    formik.setFieldValue('category', categoryValue);
  };
  const nextStep = () => {
    setCurrentStep(currentValue => {
      if (currentValue === MAX_STEP) {
        return currentValue;
      }

      return currentValue + 1;
    });
  };
  // const backStep = () => {};

  // const onSubmit = async (
  //   values: InitialValuesForm,
  //   helper: FormikHelpers<typeof initialValues>,
  // ) => {
  //   try {
  //     // const response = await transactionsService.createTransaction({
  //     //   ...values,
  //     //   originCreate: 'web',
  //     //   categoryId: values.category,
  //     //   userId: userAccess.id!,
  //     //   value: +values.value.replace(',', '.'),
  //     // });

  //     if (response.status !== 201) throw new Error('Erro ao criar transação!');

  //     helper.resetForm();

  //   } catch (error) {
  //     // message.error(String(error));
  //   }
  // };
  const isCategorySelected = () => {
    return formik.values.category !== '';
  };

  const contextValue = useMemo(
    () => ({
      currentStep,
      formValues: formik.values,
      onChangeType,
      onSubmit: formik.handleSubmit,
      nextStep,
      isCategorySelected,
    }),
    [currentStep, formik.values, formik.handleSubmit],
  );

  return (
    <FormTransactionContext.Provider value={contextValue}>
      {children}
    </FormTransactionContext.Provider>
  );
};

const useFormTransaction = () => {
  const context = useContext(FormTransactionContext);

  if (context === undefined) {
    throw new Error('useUserContext was used outside of its Provider');
  }

  return {
    ...context,
  };
};

export { useFormTransaction, FormTransactionProvider };
