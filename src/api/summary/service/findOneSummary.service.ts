import api from '../../../services/api';

import {
  RequestFindSummary,
  ResponseFindSummary,
} from '../interface/findSummary.interface';

export const findSummary = ({ userId }: RequestFindSummary) => {
  return api.get<ResponseFindSummary>(`summary/month/${userId}`);
};
