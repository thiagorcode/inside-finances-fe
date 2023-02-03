import api from '../../../services/api';
import { UpdateTransaction } from '../interface/updateTransaction.interface';

export const updateTransaction = (id: string, data: UpdateTransaction) => {
  return api.patch(`transactions/${id}`, data);
};
