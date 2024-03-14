import { useUser } from '@/hooks/useUser';
import api from '../../../services/api';
import {
  RequestTransactions,
  ResponseTransactionsByParams,
} from '../interface/listTransactionByParamns';

export const listTransactionsByParams = ({
  endDate,
  startDate,
  token,
}: RequestTransactions) => {
  return api.get<ResponseTransactionsByParams>(
    `transactions/list?${startDate}&?${endDate}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};
