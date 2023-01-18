import { Route, Routes as RoutesDOM } from 'react-router-dom';

// import Menu from '../layout';

import Dashboard from '../pages/Auth/Dashboard';
import Transactions from '../pages/Auth/Transactions';
import Login from '../pages/Public/Login';
import Register from '../pages/Public/Register';
import { ProtectedRoute } from './protectedRoute';

export default function Routes() {
  return (
    <RoutesDOM>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/transactions"
        element={
          <ProtectedRoute>
            <Transactions />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </RoutesDOM>
  );
}
