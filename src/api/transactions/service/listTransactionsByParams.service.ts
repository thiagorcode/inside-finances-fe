import { ResponseDefault } from './../../../interface/responseDefault.interface';
import { queryStringBuilder } from '@/utils/queryStringBuilder';
import api from '../../../services/api';
import {
  RequestTransactions,
  ResponseTotalizer,
  ResponseTransactionsByParams,
} from '../interface/listTransactionByParamns';

export const listTransactionsByParams = ({
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

export const loadTotalizers = ({ userId, query }: RequestTransactions) => {
  // return api.get<ResponseTransactionsByParams>(
  //   `transactions/user/${userId}/all?limit=${limit}&page=${page}`,
  // );

  const queryString = queryStringBuilder(query);

  return api.get<ResponseTotalizer>(
    `transactions/user/${userId}/totalizer?${queryString}`,
  );
};
