import { queryStringBuilder } from '@/utils/queryStringBuilder';
import api from '../../services/api';

type QueryTransactions = {
  categoryId?: number;
  date?: string;
  type?: string;
};
interface RequestTransactions {
  limit: number;
  page: number;
  userId: string;
  query: QueryTransactions;
}

interface Transactions {
  id: string;
  description: string;
  value: number;
  // category: Partial<TransactionsCategoryDTO>;
  year: number;
  // month: number;
  // day: number;
  yearMonth: string;
  date: Date;
  dtCreate: Date;
  isPaid: boolean;
  originCreate?: 'web' | 'telegram';
  type: '+' | '-';
  specification?: string;
  bank?: string;
}

interface ResponseTransactionsByParams {
  transactions: {
    transactions: Transactions[];
    total: number;
    page: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

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
