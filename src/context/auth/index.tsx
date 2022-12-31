import { useUser } from '@/hooks/useUser';
import authService from '@/api/auth/auth.service';
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from 'react';

interface AuthContextProps {
  login: (user: string, password: string) => void;
}

const AuthContext = createContext({} as AuthContextProps);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { increase } = useUser();

  const login = useCallback(async (user: string, password: string) => {
    try {
      const response = await authService.login(user, password);

      if (response.status !== 200) {
        console.log('No Auth');
        return;
      }

      increase(response.data.user);
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
