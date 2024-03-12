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
      const splitInit = values.initDate.split('-');
      const splitEnd = values.endDate.split('-');

      const initDate = new Date(
        `${splitInit[1]}-${splitInit[2]}-${splitInit[0]}`,
      );
      const endDate = new Date(`${splitEnd[1]}-${splitEnd[2]}-${splitEnd[0]}`);
      saveDate({ initDate, endDate });
      saveFilter({ initDate, endDate });
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
