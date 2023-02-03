import api from '../../../services/api';
import { CreateTransaction } from '../interface/createTransaction.interface';

export const createTransaction = ({
  date,
  bank,
  value,
  description,
  type,
  categoryId,
  isPaid,
  userId,
  installment,
  finalInstallment,
  originCreate,
}: CreateTransaction) => {
  const transaction: CreateTransaction = {
    date,
    bank,
    value,
    description,
    type,
    originCreate,
    userId,
    categoryId,
    isPaid,
    installment: +installment,
    finalInstallment: +finalInstallment,
  };
  return api.post('transactions', transaction);
};
