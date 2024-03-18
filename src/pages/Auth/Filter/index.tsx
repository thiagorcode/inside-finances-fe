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
import { useNavigate } from 'react-router-dom';
import { useDate, useFilter } from '@/hooks/useFilter';

export const Filter = () => {
  const { modal, toggleModal } = useModal();
  const { dates, resetDate } = useDate();
  const { filter, saveFilter, resetFilter } = useFilter();
  const navigate = useNavigate();

  function openModal(key: string) {
    toggleModal({
      [key]: {
        isOpen: true,
      },
    });
  }

  function selectText(select: string | boolean | undefined) {
    if (select) {
      switch (select) {
        case '31eb3237-23b1-4422-980d-bce15bcf9494':
          return <p>Alimentação</p>;
        case 'd525e1ef-7941-4fe8-8c08-440aff755ed9':
          return <p>Saúde</p>;
        case 'f4bcde23-cbd6-4a49-9bb4-a794958c6688':
          return <p>Transporte</p>;
        case '6666c8a5-8e1f-4ccb-af69-9d73e931a90b':
          return <p>Lanches</p>;
        case '05094f4b-f0eb-460d-bd79-d36fb63f86f5':
          return <p>Contas</p>;
        case 'e7a29243-9b09-4b15-9551-3dbb4346f62a':
          return <p>Lazer</p>;
        case 'cfef73cd-729d-4fe7-901c-255288905bab':
          return <p>Casa</p>;
        case '5007d582-4fff-4de4-8fae-6a8552345f73':
          return <p>Viagem</p>;
        case '7b3d8cac-91ad-46d8-aa93-44baa6ae1fcb':
          return <p>Mercado</p>;
        case '0e13f258-ea8f-422c-aefd-185b1c9a73fc':
          return <p>Transferência</p>;
        case 'f4cd4ebc-0d51-47f4-9854-2e017a32341a':
          return <p>Salário</p>;
        case '1582f89e-77ed-4b1f-8e4e-82471e9a6e0b':
          return <p>Educação</p>;
        case '4329373a-f409-453f-98d2-815262ecc6e7':
          return <p>Dividendos</p>;
        case '0d29d8da-8db8-4c78-bb61-60cdea046465':
          return <p>Pet</p>;
        case '9d04e6fa-620c-48a8-8bd6-c5d85d0b7841':
          return <p>Carro</p>;
        case '487515eb-101d-4d6d-96d2-eff8eb8a27f7':
          return <p>Música</p>;
        case '08da2204-05c5-4124-a95f-7d944b5c7435':
          return <p>Vestuário</p>;
        case 'dc9547fd-858b-4acf-a799-97c5102a259e':
          return <p>Outros</p>;
        case '+':
          return <p>Receita</p>;
        case '-':
          return <p>Despesa</p>;
        case true:
          return <p>Pago</p>;
      }
    }
    if (select == false) {
      return <p>Não Pago</p>;
    }
    return <p>Todos</p>;
  }

  function dateText(initDate: string | undefined, endDate: string | undefined) {
    if (initDate && endDate) {
      const init = new Date(initDate);
      const end = new Date(endDate);
      return (
        <p>{`${init.toLocaleString('en-GB', {
          timeZone: 'UTC',
          day: 'numeric',
          month: 'numeric',
        })} - ${end.toLocaleString('en-GB', {
          timeZone: 'UTC',
          day: 'numeric',
          month: 'numeric',
        })}`}</p>
      );
    }
    return <p>Todas as datas</p>;
  }

  function reset() {
    resetFilter();
    resetDate();
    navigate('/transactions');
  }

  const formik = useFormik({
    initialValues: {
      category: filter.category,
      type: filter.type,
      status: filter.status,
    },
    onSubmit: values => {
      saveFilter({
        initDate: dates.initDate,
        endDate: dates.endDate,
        category: values.category,
        type: values.type,
        status: values.status,
      });
      navigate('/transactions');
    },
  });

  return (
    <>
      <Container>
        {
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
                    <div>{dateText(filter.initDate, filter.endDate)}</div>
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
                    <div>{selectText(filter.category)}</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="content">
                <Button
                  type="button"
                  checked={
                    formik.values.category ===
                    '31eb3237-23b1-4422-980d-bce15bcf9494'
                  }
                  onClick={() =>
                    formik.setFieldValue(
                      'category',
                      '31eb3237-23b1-4422-980d-bce15bcf9494',
                    )
                  }
                >
                  <input
                    type="radio"
                    className="input"
                    name="category"
                    value="food"
                    checked={
                      formik.values.category ===
                      '31eb3237-23b1-4422-980d-bce15bcf9494'
                    }
                  />
                  Alimentação
                </Button>
                <Button
                  type="button"
                  checked={
                    formik.values.category ===
                    'd525e1ef-7941-4fe8-8c08-440aff755ed9'
                  }
                  onClick={() =>
                    formik.setFieldValue(
                      'category',
                      'd525e1ef-7941-4fe8-8c08-440aff755ed9',
                    )
                  }
                >
                  <input
                    type="radio"
                    className="input"
                    name="category"
                    value="heal"
                    checked={
                      formik.values.category ===
                      'd525e1ef-7941-4fe8-8c08-440aff755ed9'
                    }
                  />
                  Saúde
                </Button>
                <Button
                  type="button"
                  checked={
                    formik.values.category ===
                    'f4bcde23-cbd6-4a49-9bb4-a794958c6688'
                  }
                  onClick={() =>
                    formik.setFieldValue(
                      'category',
                      'f4bcde23-cbd6-4a49-9bb4-a794958c6688',
                    )
                  }
                >
                  <input
                    type="radio"
                    className="input"
                    name="category"
                    value="transport"
                    checked={
                      formik.values.category ===
                      'f4bcde23-cbd6-4a49-9bb4-a794958c6688'
                    }
                  />
                  Trasporte
                </Button>
                <Button
                  type="button"
                  checked={
                    formik.values.category ===
                    '6666c8a5-8e1f-4ccb-af69-9d73e931a90b'
                  }
                  onClick={() =>
                    formik.setFieldValue(
                      'category',
                      '6666c8a5-8e1f-4ccb-af69-9d73e931a90b',
                    )
                  }
                >
                  <input
                    type="radio"
                    className="input"
                    name="category"
                    value="transport"
                    checked={
                      formik.values.category ===
                      '6666c8a5-8e1f-4ccb-af69-9d73e931a90b'
                    }
                  />
                  Lanches
                </Button>
                <Button
                  type="button"
                  checked={
                    formik.values.category ===
                    '05094f4b-f0eb-460d-bd79-d36fb63f86f5'
                  }
                  onClick={() =>
                    formik.setFieldValue(
                      'category',
                      '05094f4b-f0eb-460d-bd79-d36fb63f86f5',
                    )
                  }
                >
                  <input
                    type="radio"
                    className="input"
                    name="category"
                    value="transport"
                    checked={
                      formik.values.category ===
                      '05094f4b-f0eb-460d-bd79-d36fb63f86f5'
                    }
                  />
                  Contas
                </Button>
                <Button
                  type="button"
                  checked={
                    formik.values.category ===
                    'e7a29243-9b09-4b15-9551-3dbb4346f62a'
                  }
                  onClick={() =>
                    formik.setFieldValue(
                      'category',
                      'e7a29243-9b09-4b15-9551-3dbb4346f62a',
                    )
                  }
                >
                  <input
                    type="radio"
                    className="input"
                    name="category"
                    value="transport"
                    checked={
                      formik.values.category ===
                      'e7a29243-9b09-4b15-9551-3dbb4346f62a'
                    }
                  />
                  Lazer
                </Button>
                <Button
                  type="button"
                  checked={
                    formik.values.category ===
                    'cfef73cd-729d-4fe7-901c-255288905bab'
                  }
                  onClick={() =>
                    formik.setFieldValue(
                      'category',
                      'cfef73cd-729d-4fe7-901c-255288905bab',
                    )
                  }
                >
                  <input
                    type="radio"
                    className="input"
                    name="category"
                    value="transport"
                    checked={
                      formik.values.category ===
                      'cfef73cd-729d-4fe7-901c-255288905bab'
                    }
                  />
                  Casa
                </Button>
                <Button
                  type="button"
                  checked={
                    formik.values.category ===
                    '5007d582-4fff-4de4-8fae-6a8552345f73'
                  }
                  onClick={() =>
                    formik.setFieldValue(
                      'category',
                      '5007d582-4fff-4de4-8fae-6a8552345f73',
                    )
                  }
                >
                  <input
                    type="radio"
                    className="input"
                    name="category"
                    value="transport"
                    checked={
                      formik.values.category ===
                      '5007d582-4fff-4de4-8fae-6a8552345f73'
                    }
                  />
                  Viagem
                </Button>
                <Button
                  type="button"
                  checked={
                    formik.values.category ===
                    '7b3d8cac-91ad-46d8-aa93-44baa6ae1fcb'
                  }
                  onClick={() =>
                    formik.setFieldValue(
                      'category',
                      '7b3d8cac-91ad-46d8-aa93-44baa6ae1fcb',
                    )
                  }
                >
                  <input
                    type="radio"
                    className="input"
                    name="category"
                    value="transport"
                    checked={
                      formik.values.category ===
                      '7b3d8cac-91ad-46d8-aa93-44baa6ae1fcb'
                    }
                  />
                  Mercado
                </Button>
                <Button
                  type="button"
                  checked={
                    formik.values.category ===
                    '0e13f258-ea8f-422c-aefd-185b1c9a73fc'
                  }
                  onClick={() =>
                    formik.setFieldValue(
                      'category',
                      '0e13f258-ea8f-422c-aefd-185b1c9a73fc',
                    )
                  }
                >
                  <input
                    type="radio"
                    className="input"
                    name="category"
                    value="transport"
                    checked={
                      formik.values.category ===
                      '0e13f258-ea8f-422c-aefd-185b1c9a73fc'
                    }
                  />
                  Transferência
                </Button>
                <Button
                  type="button"
                  checked={
                    formik.values.category ===
                    'f4cd4ebc-0d51-47f4-9854-2e017a32341a'
                  }
                  onClick={() =>
                    formik.setFieldValue(
                      'category',
                      'f4cd4ebc-0d51-47f4-9854-2e017a32341a',
                    )
                  }
                >
                  <input
                    type="radio"
                    className="input"
                    name="category"
                    value="transport"
                    checked={
                      formik.values.category ===
                      'f4cd4ebc-0d51-47f4-9854-2e017a32341a'
                    }
                  />
                  Salário
                </Button>
                <Button
                  type="button"
                  checked={
                    formik.values.category ===
                    '1582f89e-77ed-4b1f-8e4e-82471e9a6e0b'
                  }
                  onClick={() =>
                    formik.setFieldValue(
                      'category',
                      '1582f89e-77ed-4b1f-8e4e-82471e9a6e0b',
                    )
                  }
                >
                  <input
                    type="radio"
                    className="input"
                    name="category"
                    value="transport"
                    checked={
                      formik.values.category ===
                      '1582f89e-77ed-4b1f-8e4e-82471e9a6e0b'
                    }
                  />
                  Educação
                </Button>
                <Button
                  type="button"
                  checked={
                    formik.values.category ===
                    '4329373a-f409-453f-98d2-815262ecc6e7'
                  }
                  onClick={() =>
                    formik.setFieldValue(
                      'category',
                      '4329373a-f409-453f-98d2-815262ecc6e7',
                    )
                  }
                >
                  <input
                    type="radio"
                    className="input"
                    name="category"
                    value="transport"
                    checked={
                      formik.values.category ===
                      '4329373a-f409-453f-98d2-815262ecc6e7'
                    }
                  />
                  Dividendos
                </Button>
                <Button
                  type="button"
                  checked={
                    formik.values.category ===
                    '0d29d8da-8db8-4c78-bb61-60cdea046465'
                  }
                  onClick={() =>
                    formik.setFieldValue(
                      'category',
                      '0d29d8da-8db8-4c78-bb61-60cdea046465',
                    )
                  }
                >
                  <input
                    type="radio"
                    className="input"
                    name="category"
                    value="transport"
                    checked={
                      formik.values.category ===
                      '0d29d8da-8db8-4c78-bb61-60cdea046465'
                    }
                  />
                  Pet
                </Button>
                <Button
                  type="button"
                  checked={
                    formik.values.category ===
                    '9d04e6fa-620c-48a8-8bd6-c5d85d0b7841'
                  }
                  onClick={() =>
                    formik.setFieldValue(
                      'category',
                      '9d04e6fa-620c-48a8-8bd6-c5d85d0b7841',
                    )
                  }
                >
                  <input
                    type="radio"
                    className="input"
                    name="category"
                    value="transport"
                    checked={
                      formik.values.category ===
                      '9d04e6fa-620c-48a8-8bd6-c5d85d0b7841'
                    }
                  />
                  Carro
                </Button>
                <Button
                  type="button"
                  checked={
                    formik.values.category ===
                    '487515eb-101d-4d6d-96d2-eff8eb8a27f7'
                  }
                  onClick={() =>
                    formik.setFieldValue(
                      'category',
                      '487515eb-101d-4d6d-96d2-eff8eb8a27f7',
                    )
                  }
                >
                  <input
                    type="radio"
                    className="input"
                    name="category"
                    value="transport"
                    checked={
                      formik.values.category ===
                      '487515eb-101d-4d6d-96d2-eff8eb8a27f7'
                    }
                  />
                  Música
                </Button>
                <Button
                  type="button"
                  checked={
                    formik.values.category ===
                    '08da2204-05c5-4124-a95f-7d944b5c7435'
                  }
                  onClick={() =>
                    formik.setFieldValue(
                      'category',
                      '08da2204-05c5-4124-a95f-7d944b5c7435',
                    )
                  }
                >
                  <input
                    type="radio"
                    className="input"
                    name="category"
                    value="transport"
                    checked={
                      formik.values.category ===
                      '08da2204-05c5-4124-a95f-7d944b5c7435'
                    }
                  />
                  Vestuário
                </Button>
                <Button
                  type="button"
                  checked={
                    formik.values.category ===
                    'dc9547fd-858b-4acf-a799-97c5102a259e'
                  }
                  onClick={() =>
                    formik.setFieldValue(
                      'category',
                      'dc9547fd-858b-4acf-a799-97c5102a259e',
                    )
                  }
                >
                  <input
                    type="radio"
                    className="input"
                    name="category"
                    value="transport"
                    checked={
                      formik.values.category ===
                      'dc9547fd-858b-4acf-a799-97c5102a259e'
                    }
                  />
                  Outros
                </Button>
              </AccordionContent>
            </AccordionRoot>
            <AccordionRoot className="root">
              <AccordionTrigger className="trigger">
                <div className="trigger-content">
                  <div className="icon">
                    <Diamond sx={{ color: 'white' }} />
                  </div>
                  <div className="text">
                    <h4>Tipo</h4>
                    <div>{selectText(filter.type)}</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="content">
                <Button
                  type="button"
                  checked={formik.values.type === '+'}
                  onClick={() => formik.setFieldValue('type', '+')}
                >
                  <input
                    type="radio"
                    className="input"
                    name="type"
                    value="revenue"
                    checked={formik.values.type === '+'}
                  />
                  Receita
                </Button>
                <Button
                  type="button"
                  checked={formik.values.type === '-'}
                  onClick={() => formik.setFieldValue('type', '-')}
                >
                  <input
                    type="radio"
                    className="input"
                    name="type"
                    value="expense"
                    checked={formik.values.type === '-'}
                  />
                  Despesa
                </Button>
                <Button
                  type="button"
                  checked={formik.values.type === undefined}
                  onClick={() => formik.setFieldValue('type', undefined)}
                >
                  <input
                    type="radio"
                    className="input"
                    name="type"
                    value="all1"
                    checked={formik.values.type === undefined}
                  />
                  Todos
                </Button>
              </AccordionContent>
            </AccordionRoot>
            <AccordionRoot className="root">
              <AccordionTrigger className="trigger">
                <div className="trigger-content">
                  <div className="icon">
                    <Diamond sx={{ color: 'white' }} />
                  </div>
                  <div className="text">
                    <h4>Status</h4>
                    <div>{selectText(filter.status)}</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="content">
                <Button
                  type="button"
                  checked={formik.values.status === true}
                  onClick={() => formik.setFieldValue('status', true)}
                >
                  <input
                    type="radio"
                    className="input"
                    name="status"
                    value="pay"
                    checked={formik.values.status === true}
                  />
                  Pago
                </Button>
                <Button
                  type="button"
                  checked={formik.values.status === false}
                  onClick={() => formik.setFieldValue('status', false)}
                >
                  <input
                    type="radio"
                    className="input"
                    name="status"
                    value="noPay"
                    checked={formik.values.status === false}
                  />
                  Não Pago
                </Button>
                <Button
                  type="button"
                  checked={formik.values.status === undefined}
                  onClick={() => formik.setFieldValue('status', undefined)}
                >
                  <input
                    type="radio"
                    className="input"
                    name="status"
                    value="all2"
                    checked={formik.values.status === undefined}
                  />
                  Todos
                </Button>
              </AccordionContent>
            </AccordionRoot>
            <div className="button-content">
              <button type="submit" className="button-submit">
                Aplicar
              </button>
              <button onClick={reset} type="button" className="button-reset">
                Resetar
              </button>
            </div>
          </form>
        }
      </Container>
      {modal?.addFilter?.isOpen && <FilterModal />}
    </>
  );
};
