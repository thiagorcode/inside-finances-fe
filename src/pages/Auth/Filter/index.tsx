import {
  AccordionContent,
  AccordionRoot,
  AccordionTrigger,
} from '@/components/Accordion';
import { Diamond } from '@mui/icons-material/';
import { CalendarMonth } from '@mui/icons-material/';
import { Button, Container } from './styles';
import { FilterModal } from './components/modal';
import { useModal } from '@/context/modal';
import { useFormik } from 'formik';
import { selectSchema } from './selectSchema';
import { useDate } from '@/hooks/useFilter';

export const Filter = () => {
  const { modal, toggleModal } = useModal();
  const { dates } = useDate();

  function openModal(key: string) {
    toggleModal({
      [key]: {
        isOpen: true,
      },
    });
  }

  const formik = useFormik({
    initialValues: {
      category: '',
      type: '',
      status: '',
    },
    validationSchema: selectSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <>
      <Container>
        <form onSubmit={formik.handleSubmit} className="form">
          <button
            type="button"
            onClick={() => openModal('addFilter')}
            className="root"
          >
            <div className="trigger">
              <div className="trigger-content">
                <div className="icon">
                  <CalendarMonth sx={{ color: 'white' }} />
                </div>
                <div className="text">
                  <h4>Data da Transição</h4>
                  <p>{`${dates.initDate?.toLocaleDateString('pt-br', {
                    day: 'numeric',
                    month: 'numeric',
                  })} - ${dates.endDate?.toLocaleDateString('pt-br', {
                    day: 'numeric',
                    month: 'numeric',
                  })}`}</p>
                </div>
              </div>
            </div>
          </button>
          <AccordionRoot className="root">
            <AccordionTrigger className="trigger">
              <div className="trigger-content">
                <div className="icon">
                  <Diamond sx={{ color: 'white' }} />
                </div>
                <div className="text">
                  <h4>Categoria</h4>
                  <p>Filtro:</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="content">
              <Button
                type="button"
                checked={formik.values.category === 'food'}
                onClick={() => formik.setFieldValue('category', 'food')}
              >
                <input
                  type="radio"
                  className="input"
                  name="category"
                  value="food"
                  checked={formik.values.category === 'food'}
                />
                Alimentação
              </Button>
              <Button
                type="button"
                checked={formik.values.category === 'heal'}
                onClick={() => formik.setFieldValue('category', 'heal')}
              >
                <input
                  type="radio"
                  className="input"
                  name="category"
                  value="heal"
                  checked={formik.values.category === 'heal'}
                />
                Saude
              </Button>
              <Button
                type="button"
                checked={formik.values.category === 'transport'}
                onClick={() => formik.setFieldValue('category', 'transport')}
              >
                <input
                  type="radio"
                  className="input"
                  name="category"
                  value="transport"
                  checked={formik.values.category === 'transport'}
                />
                Trasporte
              </Button>
            </AccordionContent>
            {formik.touched.category && formik.errors.category ? (
              <div>{formik.errors.category}</div>
            ) : null}
          </AccordionRoot>
          <AccordionRoot className="root">
            <AccordionTrigger className="trigger">
              <div className="trigger-content">
                <div className="icon">
                  <Diamond sx={{ color: 'white' }} />
                </div>
                <div className="text">
                  <h4>Tipo</h4>
                  <p>Filtro:</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="content">
              <Button
                type="button"
                checked={formik.values.type === 'revenue'}
                onClick={() => formik.setFieldValue('type', 'revenue')}
              >
                <input
                  type="radio"
                  className="input"
                  name="type"
                  value="revenue"
                  checked={formik.values.type === 'revenue'}
                />
                Receita
              </Button>
              <Button
                type="button"
                checked={formik.values.type === 'expense'}
                onClick={() => formik.setFieldValue('type', 'expense')}
              >
                <input
                  type="radio"
                  className="input"
                  name="type"
                  value="expense"
                  checked={formik.values.type === 'expense'}
                />
                Despesa
              </Button>
              <Button
                type="button"
                checked={formik.values.type === 'all1'}
                onClick={() => formik.setFieldValue('type', 'all1')}
              >
                <input
                  type="radio"
                  className="input"
                  name="type"
                  value="all1"
                  checked={formik.values.type === 'all1'}
                />
                Todos
              </Button>
            </AccordionContent>
            {formik.touched.type && formik.errors.type ? (
              <div>{formik.errors.type}</div>
            ) : null}
          </AccordionRoot>
          <AccordionRoot className="root">
            <AccordionTrigger className="trigger">
              <div className="trigger-content">
                <div className="icon">
                  <Diamond sx={{ color: 'white' }} />
                </div>
                <div className="text">
                  <h4>Status</h4>
                  <p>Filtro:</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="content">
              <Button
                type="button"
                checked={formik.values.status === 'pay'}
                onClick={() => formik.setFieldValue('status', 'pay')}
              >
                <input
                  type="radio"
                  className="input"
                  name="status"
                  value="pay"
                  checked={formik.values.status === 'pay'}
                />
                Pago
              </Button>
              <Button
                type="button"
                checked={formik.values.status === 'noPay'}
                onClick={() => formik.setFieldValue('status', 'noPay')}
              >
                <input
                  type="radio"
                  className="input"
                  name="status"
                  value="noPay"
                  checked={formik.values.status === 'noPay'}
                />
                Não Pago
              </Button>
              <Button
                type="button"
                checked={formik.values.status === 'all2'}
                onClick={() => formik.setFieldValue('status', 'all2')}
              >
                <input
                  type="radio"
                  className="input"
                  name="status"
                  value="all2"
                  checked={formik.values.status === 'all2'}
                />
                Todos
              </Button>
            </AccordionContent>
            {formik.touched.status && formik.errors.status ? (
              <div>{formik.errors.status}</div>
            ) : null}
          </AccordionRoot>
          <div className="button-content">
            <button type="submit" className="button-submit">
              Aplicar
            </button>
            <button type="button" className="button-reset">
              Resetar
            </button>
          </div>
        </form>
      </Container>
      {modal?.addFilter?.isOpen && <FilterModal />}
    </>
  );
};
