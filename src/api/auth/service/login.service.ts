import api from '../../../services/api';
import { AxiosResponse } from 'axios';
import { AuthLogin } from '../interface/auth.interface';

export const login = (
  login: string,
  password: string,
): Promise<AxiosResponse<AuthLogin>> => {
  return api.post('auth/login', {
    login,
    password,
  });
};
