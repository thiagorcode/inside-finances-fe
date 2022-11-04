import { ReactNode, useMemo } from 'react';
import { ModalProvider } from './modal';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const providers = useMemo(() => [ModalProvider], []);

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
