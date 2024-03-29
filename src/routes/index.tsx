import { Route, Routes as RoutesDOM } from 'react-router-dom';

import Menu from '../layout';

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
            <Menu>
              <Dashboard />
            </Menu>
          </ProtectedRoute>
        }
      />
      <Route
        path="/transactions"
        element={
          <ProtectedRoute>
            <Menu>
              <Transactions />
            </Menu>
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </RoutesDOM>
  );
}
