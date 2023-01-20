import api from '../../../services/api';
import { CreateTransaction } from '../interface/createTransaction.interface';

export const createTransaction = ({
  date,
  bank,
  value,
  description,
  type,
  category,
  userId,
}: CreateTransaction) => {
  return api.post('transactions', {
    date,
    bank,
    value,
    description,
    type,
    originCreate: 'web',
    userId,
    categoryId: category,
  });
};
