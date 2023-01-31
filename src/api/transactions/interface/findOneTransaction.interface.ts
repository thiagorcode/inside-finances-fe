import { ResponseDefault } from '@/interface/responseDefault.interface';
import { Transactions } from '@/interface/transactions.interface';

export interface RequestFindOneTransaction {
  id: string;
}

export interface ResponseFindOneTransaction extends ResponseDefault {
  transaction: Transactions;
}
