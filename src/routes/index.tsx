import { Route, Routes as RoutesDOM } from 'react-router-dom';

// import Menu from '../layout';

import Dashboard from '../pages/Auth/Dashboard';
import Transactions from '../pages/Auth/Transactions';
import Login from '../pages/Public/Login';
import Register from '../pages/Public/Register';

export default function Routes() {
  return (
    <RoutesDOM>
      <Route path="/" element={<Dashboard />} />

      <Route path="/transactions" element={<Transactions />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </RoutesDOM>
  );
}
