import api from '../../../services/api';
import { CreateTransaction } from '../interface/createTransaction.interface';

export const createTransaction = ({
  date,
  bank,
  value,
  description,
  type,
  category,
}: CreateTransaction) => {
  return api.post('transactions', {
    date,
    bank,
    value,
    description,
    type,
    originCreate: 'web',
    userId: 'fac56249-feaf-460d-9aa5-37dd6412cdb9',
    categoryId: category,
  });
};
