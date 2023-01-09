import { ResponseDefault } from '@/api/responseDefault.interface';
import { TransactionCategory } from '@/interface/transactionCategory.interface';

export interface ResponseTransactionCategory extends ResponseDefault {
  category: TransactionCategory[];
}
