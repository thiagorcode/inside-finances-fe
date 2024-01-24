import axios, { AxiosResponse } from 'axios';

import { ResponseTransactionCategory } from '../interface/listCategory.interface';

export const listCategory = (): Promise<
  AxiosResponse<ResponseTransactionCategory>
> => {
  return axios.get(
    'https://my38erruz6.execute-api.sa-east-1.amazonaws.com/dev/transactions-category',
  );
};
