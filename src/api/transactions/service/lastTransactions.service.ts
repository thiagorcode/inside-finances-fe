import api from '../../../services/api';
import {
  LastTransactions,
  ResponseLastTransactions,
} from '../interface/lastTransactions.interface';

export const lastTransactions = ({ userId }: LastTransactions) => {
  return api.get<ResponseLastTransactions>(`transactions/user/${userId}/last`);
};
