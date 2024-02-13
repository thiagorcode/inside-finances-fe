import { Route, Routes as RoutesDOM } from 'react-router-dom';

import Menu from '../layout';

import Home from '../pages/Auth/Home';
import Transactions from '../pages/Auth/Transactions';
import Login from '../pages/Public/Login';
import Register from '../pages/Public/Register';
import { ProtectedRoute } from './protectedRoute';
import { Filter } from '@/pages/Auth/Filter';

export default function Routes() {
  return (
    <RoutesDOM>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Menu>
              <Home />
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
      <Route
        path="/filter"
        element={
          <ProtectedRoute>
            <Menu>
              <Filter />
            </Menu>
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </RoutesDOM>
  );
}
