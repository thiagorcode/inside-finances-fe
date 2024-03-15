import { TransactionCategory } from './transactionCategory.interface';

export interface Totalizes {
  recipe: number;
  expense: number;
  totalBalance: number;
}

interface Category {
  name: string;
  id: string;
}

interface Card {
  name: string;
  id: string;
}

export interface Transition {
  value: number;
  date: string;
  userId: string;
  category: Category;
  isPaid: boolean;
  description: string;
  id: string;
  card: Card;
  type: string;
}
export interface Transactions {
  totalizers: Totalizes;
  transactions: Transition[];
}
