import { TransactionCategory } from './transactionCategory.interface';

export interface Transactions {
  id: string;
  description: string;
  value: number;
  category: Partial<TransactionCategory>;
  year: number;
  month: number;
  day: number;
  yearMonth: string;
  date: string;
  dtCreate: Date;
  isPaid: boolean;
  originCreate?: 'web' | 'telegram';
  type: '+' | '-';
  specification?: string;
  bank?: string;
}
