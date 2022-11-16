import api from '../api';

interface RequestTransactions {
  limit: number;
  page: number;
  userId: string;
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
  transactions: Transactions[];
  total: number;
  page: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export const getTransactionsByParams = ({
  limit,
  page,
  userId,
}: RequestTransactions) => {
  return api.get<ResponseTransactionsByParams>(
    `transactions/user/${userId}/all?limit=${limit}&page=${page}`,
  );
};
