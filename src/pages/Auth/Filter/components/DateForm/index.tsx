import { Input } from '@/components/Input';
import { Container } from './style';
import { useFormik } from 'formik';
import { dateSchema } from './dateSchema';
import { useModal } from '@/context/modal';
import { useDate, useFilter } from '@/hooks/useFilter';

export const DateForm = () => {
  const { saveDate } = useDate();
  const { saveFilter } = useFilter();
  const { toggleModal } = useModal();

  function closeModal() {
    toggleModal({
      addFilter: {
        isOpen: false,
      },
    });
  }

  const formik = useFormik({
    initialValues: {
      initDate: '',
      endDate: '',
    },
    validationSchema: dateSchema,
    onSubmit: values => {
      saveDate(values);
      saveFilter(values);
      closeModal();
    },
  });
  return (
    <Container>
      <form onSubmit={formik.handleSubmit} className="form">
        <div className="content">
          <label htmlFor="date init">Data Inicial</label>
          <Input
            id="date init"
            type="date"
            name="initDate"
            value={formik.values.initDate}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.initDate && formik.errors.initDate ? (
            <div>{formik.errors.initDate}</div>
          ) : null}
        </div>
        <div className="content">
          <label htmlFor="date final">Data Final</label>
          <Input
            id="date final"
            type="date"
            name="endDate"
            value={formik.values.endDate}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.endDate && formik.errors.endDate ? (
            <div>{formik.errors.endDate}</div>
          ) : null}
        </div>
        <button type="submit" className="button">
          Confirmar
        </button>
      </form>
    </Container>
  );
};
