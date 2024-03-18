import { queryStringBuilder } from '@/utils/queryStringBuilder';
import api from '../../../services/api';
import {
  RequestTransactions,
  ResponseTransactionsByParams,
} from '../interface/listTransactionByParamns';

export const listTransactionsByParams = ({
  endDate,
  startDate,
  token,
  categoryId,
  isPaid,
  type,
}: RequestTransactions) => {
  const teste = queryStringBuilder({
    categoryId,
    type,
    isPaid,
    startDate,
    endDate,
  });
  return api.get<ResponseTransactionsByParams>(`transactions/list?${teste}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
