import { format } from 'date-fns';
import { FormikHelpers, useFormik } from 'formik';
import { Input } from '../../../../../components/Form';
import { FormTransaction } from '../../styles';
import * as Yup from 'yup';
import { Category } from '../Category';
import Button from '@/components/Button';
interface FormProps {
  setStep: (value: 0 | 1) => void;
}

const initialValues = {
  type: '',
  description: '',
  category: '',
  value: null,
  date: null,
};

const validationSchema = Yup.object().shape({
  type: Yup.string().required('Campo obrigatório'),
  description: Yup.string(),
  category: Yup.string().required('Seleção obrigatória'),
  value: Yup.number().required('Campo obrigatório'),
  date: Yup.string().required('Campo obrigatório'),
});

export const Form = ({ setStep }: FormProps) => {
  const onSubmit = (
    values: typeof initialValues,
    helper: FormikHelpers<typeof initialValues>,
  ) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onSubmit,
  });

  console.log(formik);

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

      <Category
        name="category"
        error={formik.errors}
        setFieldValue={formik.setFieldValue}
        values={formik.values}
      />
      {/** TODO: Create sugest Value - 20,00 / MED */}

      <Input
        label="Valor:"
        placeholder="R$ 99,99"
        name="value"
        error={formik.errors}
        onChange={formik.handleChange}
      />
      <Input
        label="Data:"
        name="date"
        placeholder={format(new Date(), 'dd/MM/yyyy')}
        error={formik.errors}
        onChange={formik.handleChange}
      />
      {/* <Input label="Pagamento:" placeholder="Cartão ou Avista" /> */}
      <Button size="large">Salvar</Button>
    </FormTransaction>
  );
};
