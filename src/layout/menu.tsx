import Header from '@/components/Header';
import { ReactNode } from 'react';
import MobileMenu from '../components/MobileMenu';

interface MenuProps {
  children: ReactNode;
}

export const Menu = ({ children }: MenuProps) => {
  return (
    <>
      <Header />

      {children}
      <MobileMenu />
    </>
  );
};
