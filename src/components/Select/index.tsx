import * as React from 'react';
import { Button, Input } from './styles';

/* __________________Provider__________________ */
interface SelectContextProps {
  isSelect: boolean;
  handleState: () => void;
}

const SelectContext = React.createContext<SelectContextProps>({
  isSelect: false,
  handleState() {},
});

const SelectProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSelect, setIsSelect] = React.useState<boolean>(false);

  const handleState = () => {
    setIsSelect(!isSelect);
  };

  return (
    <SelectContext.Provider value={{ isSelect, handleState }}>
      {children}
    </SelectContext.Provider>
  );
};

/* __________________Root__________________ */
interface SelectRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const SelectContent = React.forwardRef<HTMLDivElement, SelectRootProps>(
  ({ children, ...props }, ref) => {
    return (
      <SelectProvider>
        <div ref={ref} {...props}>
          {children}
        </div>
      </SelectProvider>
    );
  },
);

/* __________________Item__________________ */
interface SelectItemProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  key: string;
}

export const SelectItem = React.forwardRef<HTMLButtonElement, SelectItemProps>(
  ({ children, key, ...props }, ref) => {
    const { handleState, isSelect } = React.useContext(SelectContext);

    return (
      <Button checked={isSelect} {...props} ref={ref} onClick={handleState}>
        <Input
          type="radio"
          value={key}
          checked={isSelect}
          onChange={handleState}
        />
        {children}
      </Button>
    );
  },
);

SelectItem.displayName = 'SelectItem';
