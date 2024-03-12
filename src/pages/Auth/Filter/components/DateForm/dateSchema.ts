import * as Yup from 'yup';

export const dateSchema = Yup.object({
  initDate: Yup.date().required('Data Obrigatoria'),
  endDate: Yup.date().required('Data Obrigatoria'),
});

export type dateSchamaProps = Yup.InferType<typeof dateSchema>;
