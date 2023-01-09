import { queryStringBuilder } from '@/utils/queryStringBuilder';
import api from '../../../services/api';
import {
  RequestTransactions,
  ResponseTransactionsByParams,
} from '../interface/listTransactionByParamns';

export const getTransactionsByParams = ({
  limit,
  page,
  userId,
  query,
}: RequestTransactions) => {
  // return api.get<ResponseTransactionsByParams>(
  //   `transactions/user/${userId}/all?limit=${limit}&page=${page}`,
  // );

  const queryString = queryStringBuilder(query);

  return api.get<ResponseTransactionsByParams>(
    `transactions/user/${userId}?${queryString}`,
  );
};
