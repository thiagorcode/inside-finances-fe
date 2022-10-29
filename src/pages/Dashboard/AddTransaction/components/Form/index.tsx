import { format } from 'date-fns';
import { useFormik } from 'formik';
import { Input } from '../../../../../components/Form';
import { FormTransaction } from '../../styles';
import { Categorys } from '../Categorys';
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

export const Form = ({ setStep }: FormProps) => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement> | undefined) => {
    console.log(onSubmit);
  };

  const formik = useFormik({
    initialValues,
    handleSubmit: onSubmit,
  });

  return (
    <FormTransaction>
      {/** TODO: Alterar o placeholder quando ele for despesa ou receita */}
      <Input
        label="Descrição:"
        placeholder="Alimentação, Salário, Conta"
        name="description"
      />
      <Input
        label="Tipo:"
        placeholder="Alimentação, Salário, Conta"
        name="type"
      >
        <select className="class_input">
          <option value="">Selecione</option>
          <option value="+">Receita</option>
          <option value="-">Despesa</option>
        </select>
      </Input>
      <Categorys />
      {/** TODO: Create sugest Value - 20,00 / MED */}

      <Input label="Valor:" placeholder="R$ 99,99" />
      <Input label="Data:" placeholder={format(new Date(), 'dd/MM/yyyy')} />
      {/* <Input label="Pagamento:" placeholder="Cartão ou Avista" /> */}
      <Button size="large">Salvar</Button>
    </FormTransaction>
  );
};
