import { Transactions } from '@/interface/transactions.interface';

type QueryTransactions = {
  categoryId?: number;
  date?: string;
  type?: string;
};

// export interface ResponseTransactionsByParams {
//   transactions: {
//     transactions: Transactions[];
//     total: number;
//     page: number;
//     totalPages: number;
//     hasNext: boolean;
//     hasPrev: boolean;
//   };
// }
export interface ResponseTransactionsByParams {
  transactions: Transactions[];
}

export interface RequestTransactions {
  limit: number;
  page: number;
  userId: string;
  query: QueryTransactions;
}

export interface ResponseTotalizer {
  totalizers: {
    recipe: number;
    expense: number;
    totalBalance: number;
  };
}
