import { useUser } from '@/hooks/useUser';
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { userAccess } = useUser();
  console.log(userAccess);
  if (!Object.keys(userAccess).length) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};
