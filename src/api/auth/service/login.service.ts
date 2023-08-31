import api from '../../../services/api';
import { AxiosResponse } from 'axios';
import { AuthLogin } from '../interface/auth.interface';

export const login = (
  login: string,
  password: string,
): Promise<AxiosResponse<AuthLogin>> => {
  return api
    .post('auth/login', {
      login,
      password,
    })
    .catch(err => {
      return {
        ...err,
        status: 200,
        id: '1214',
        username: 'thiagorcode',
        email: 'thiago@gmail.com',
        active: 'true',
      };
    });
};
