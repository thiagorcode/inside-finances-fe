import { ReactNode, useMemo } from 'react';
import { AuthProvider } from './auth';
import { ModalProvider } from './modal';
import { FormTransactionProvider } from './formTransaction';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const providers = useMemo(
    () => [ModalProvider, AuthProvider, FormTransactionProvider],
    [],
  );

  return (
    <>
      {providers.reduce(
        (Acc, Provider) => (
          <Provider>{Acc}</Provider>
        ),
        children,
      )}
    </>
  );
};
