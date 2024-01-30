import HeaderList from '@/components/HeaderList/Index';

export const LayoutTransaction = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <HeaderList />
      {children}
    </>
  );
};
