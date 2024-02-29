import * as React from 'react';

/* __________________Provider__________________ */
interface AccordionContextProps {
  isOpen: boolean;
  handleState: () => void;
}

const AccordionContext = React.createContext<AccordionContextProps>({
  isOpen: false,
  handleState() {},
});

const AccordionProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContext.Provider value={{ isOpen, handleState }}>
      {children}
    </AccordionContext.Provider>
  );
};

/* __________________Root__________________ */
interface AccordionRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export const AccordionRoot = React.forwardRef<
  HTMLDivElement,
  AccordionRootProps
>(({ children, ...props }, ref) => {
  return (
    <AccordionProvider>
      <div ref={ref} {...props}>
        {children}
      </div>
    </AccordionProvider>
  );
});

/* __________________Trigger__________________ */
interface AccordionTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export const AccordionTrigger = React.forwardRef<
  HTMLDivElement,
  AccordionTriggerProps
>(({ ...props }, ref) => {
  const { handleState, isOpen } = React.useContext(AccordionContext);

  return (
    <button onClick={handleState}>
      <div ref={ref} {...props}></div>
    </button>
  );
});

AccordionTrigger.displayName = 'AccordionTrigger';

/* __________________Content__________________ */
interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  children?: React.ReactNode;
}

export const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, ...props }, ref) => {
  const { isOpen } = React.useContext(AccordionContext);

  return (
    isOpen && (
      <div ref={ref} {...props}>
        {children}
      </div>
    )
  );
});

AccordionContent.displayName = 'AccordionContent';

/* __________________Item__________________ */
interface ItemProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean;
  children?: React.ReactNode;
}

export const AccordionItem = React.forwardRef<HTMLDivElement, ItemProps>(
  ({ children, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    );
  },
);

AccordionItem.displayName = 'AccordionItem';
