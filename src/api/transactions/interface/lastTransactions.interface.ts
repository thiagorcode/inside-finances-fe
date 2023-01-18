import { ResponseDefault } from '@/interface/responseDefault.interface';
import { Transactions } from '@/interface/transactions.interface';

export interface LastTransactions {
  userId: string;
}

export interface ResponseLastTransactions extends ResponseDefault {
  transactions: Transactions[];
}
