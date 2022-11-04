import api from '../api';
import { AxiosResponse } from 'axios';
import { AuthLogin } from './auth.interface';

const login = (
  login: string,
  password: string,
): Promise<AxiosResponse<AuthLogin>> => {
  return api.post('auth/login', {
    login,
    password,
  });
};

export default { login };
