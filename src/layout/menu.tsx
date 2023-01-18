import { ReactNode } from 'react';
import MobileMenu from '../components/MobileMenu';

interface MenuProps {
  children: ReactNode;
}

export const Menu = ({ children }: MenuProps) => {
  return (
    <>
      {children}
      <MobileMenu />
    </>
  );
};
