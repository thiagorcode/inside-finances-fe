import { ResponseDefault } from './responseDefault.interface';

export type TransactionCategory = {
  id: number;
  name: string;
  type: '+' | '-';
  icon: string;
};
