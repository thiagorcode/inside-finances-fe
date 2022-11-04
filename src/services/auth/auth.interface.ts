import { ResponseDefault } from '../responseDefault.interface';

export interface AuthLogin extends ResponseDefault {
  user: {
    id: string;
    username: string;
    email: string;
    active: boolean;
  };
}
