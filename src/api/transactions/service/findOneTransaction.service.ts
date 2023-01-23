import api from '../../../services/api';

import {
  RequestFindOneTransaction,
  ResponseFindOneTransaction,
} from '../interface/findOneTransaction.interface';

export const findOneTransaction = ({ id }: RequestFindOneTransaction) => {
  return api.get<ResponseFindOneTransaction>(`transactions/${id}`);
};
