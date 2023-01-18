import { AxiosResponse } from 'axios';
import api from '../../../services/api';
import { ResponseTransactionCategory } from '../interface/listCategory.interface';

export const listCategory = (): Promise<
  AxiosResponse<ResponseTransactionCategory>
> => {
  return api.get('category');
};
