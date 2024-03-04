import * as Yup from 'yup';

export const dateSchema = Yup.object({
  initDate: Yup.string().required('Data Obrigatoria'),
  endDate: Yup.string().required('Data Obrigatoria'),
});

export type dateSchamaProps = Yup.InferType<typeof dateSchema>;
