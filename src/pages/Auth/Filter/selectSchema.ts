import * as Yup from 'yup';

enum categoryProps {
  food = 'food',
  heal = 'heal',
  transport = 'transport',
}

enum typeProps {
  revenue = 'revenue',
  expense = 'expense',
  all1 = 'all1',
}

enum statusProps {
  pay = 'pay',
  noPay = 'noPay',
  all2 = 'all2',
}

export const selectSchema = Yup.object({
  category: Yup.string()
    .required('Marque uma das opções')
    .oneOf(Object.values(categoryProps), 'Categoria inválida'),
  type: Yup.string()
    .required('Marque uma das opções')
    .oneOf(Object.values(typeProps), 'Categoria inválida'),
  status: Yup.string()
    .required('Marque uma das opções')
    .oneOf(Object.values(statusProps), 'Categoria inválida'),
});
