import { ResponseDefault } from '../../../interface/responseDefault.interface';

export interface AuthLogin extends ResponseDefault {
  userAccess: {
    id: string;
    username: string;
    email: string;
    token: string;
  };
}
