import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type IModal<DataType> = {
  isOpen: boolean;
  isEdit?: boolean;
  data?: DataType;
  onSuccess?(data: any): void;
};

type IModalsData<DataType> = {
  [x: string]: IModal<DataType>;
};

interface ModalContextProps {
  modal: IModalsData<any>;
  toggleModal(params: IModalsData<any>): void;
}

const ModalContext = createContext({} as ModalContextProps);

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState<IModalsData<any>>({} as IModalsData<any>);

  const toggleModal = useCallback(
    (object: IModalsData<any>) => {
      setModal({
        ...modal,
        ...object,
      });
    },
    [modal],
  );

  const contextValue = useMemo(
    () => ({
      modal,
      toggleModal,
    }),
    [modal, toggleModal],
  );

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error('useUserContext was used outside of its Provider');
  }

  return context;
};

export { useModal, ModalProvider };
