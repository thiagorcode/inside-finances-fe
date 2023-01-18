import { ResponseDefault } from '@/interface/responseDefault.interface';
import { TransactionCategory } from '@/interface/transactionCategory.interface';

export interface ResponseTransactionCategory extends ResponseDefault {
  category: TransactionCategory[];
}
