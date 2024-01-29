import api from '../../../services/api';

export const login = async (login: string, password: string) => {
  const response = await api.post('auth/login', {
    username: login,
    password: password,
  });
  return await response.data;
};
