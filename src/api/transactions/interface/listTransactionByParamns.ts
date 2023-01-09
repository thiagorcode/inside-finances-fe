type QueryTransactions = {
  categoryId?: number;
  date?: string;
  type?: string;
};

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
