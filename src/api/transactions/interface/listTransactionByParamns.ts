import { Transactions } from '@/interface/transactions.interface';

type QueryTransactions = {
  categoryId?: number;
  date?: string | null;
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
  transactions: Transactions;
}

export interface RequestTransactions {
  startDate?: string;
  endDate?: string;
  token: string;
}

export interface ResponseTotalizer {
  totalizers: {
    recipe: number;
    expense: number;
    totalBalance: number;
  };
}
