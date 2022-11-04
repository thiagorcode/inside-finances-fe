import api from '../api';
import { AxiosResponse } from 'axios';
import { ResponseTransactionCategory } from '../../interface/transactionCategory.interface';

const findAll = (): Promise<AxiosResponse<ResponseTransactionCategory>> => {
  return api.get('category');
};
const findOne = (id: string): Promise<AxiosResponse> => {
  return api.get(`/find/${id}`);
};
const create = (data: object): Promise<AxiosResponse> => {
  return api.post('/add', data);
};
const remove = (id: string): Promise<AxiosResponse> => {
  return api.delete(`/remove/${id}`);
};

const update = (id: string, report: object): Promise<AxiosResponse> => {
  return api.put(`/att/${id}`, report);
};

export default { findAll, create, remove, findOne, update };
