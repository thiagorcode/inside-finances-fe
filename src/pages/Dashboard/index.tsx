import { Box } from '@mui/system';

import MobileMenu from '../../components/MobileMenu';

import Header from '../../components/Header';
import { AddTransaction } from './AddTransaction';
import { Modal } from '@mui/material';
import { Transactions } from './components/Transactions';
import { Investments } from './components/Investments';
import { Cards } from './components/Cards';
import { useModal } from '@/context/modal';

const Dashboard = () => {
  const { modal } = useModal();
  return (
    <Box component="div" sx={{ maxWidth: '1200px', ml: 'auto', mr: 'auto' }}>
      <Header />
      <Box
        component="div"
        sx={{
          display: 'block',
          m: 1,
        }}
      >
        <Transactions />
        <Investments />
        <Cards />
      </Box>
      <MobileMenu />
      {modal?.addTransaction?.isOpen && (
        <Modal open sx={{ height: '100vh' }}>
          <AddTransaction />
        </Modal>
      )}
    </Box>
  );
};

export default Dashboard;
