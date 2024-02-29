import { useUser } from '@/hooks/useUser';
import { authService } from '@/api/auth/service';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLogin } from '@/api/auth/interface/auth.interface';

interface AuthContextProps {
  login: (user: string, password: string) => Promise<void>;
}

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { increase } = useUser();
  const navigate = useNavigate();

  const login = useCallback(async (user: string, password: string) => {
    try {
      const response: AuthLogin = await authService.login(user, password);

      increase(response.userAccess);
      navigate('/');

      return;
    } catch (error) {
      console.log(error);
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      login,
    }),
    [login],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useUserContext was used outside of its Provider');
  }

  return context;
};

export { useAuth, AuthProvider };
