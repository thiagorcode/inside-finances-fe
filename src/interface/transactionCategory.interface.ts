import { ResponseDefault } from '../services/responseDefault.interface';

export type TransactionCategory = {
  id: string;
  name: string;
  type: '+' | '-';
  icon: string;
};

export interface ResponseTransactionCategory extends ResponseDefault {
  category: TransactionCategory[];
}
