import { ReactNode, useMemo } from 'react';
import { AuthProvider } from './auth';
import { ModalProvider } from './modal';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const providers = useMemo(() => [ModalProvider, AuthProvider], []);

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
