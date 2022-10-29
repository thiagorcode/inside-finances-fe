import { useState } from 'react';
import { Box } from '@mui/system';

import MobileMenu from '../../components/MobileMenu';

import Header from '../../components/Header';
import { AddTransaction } from './AddTransaction';
import { Modal } from '@mui/material';
import { Transactions } from './components/Transactions';
import { Investments } from './components/Investments';
import { Cards } from './components/Cards';

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);

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
      <Modal open={openModal} sx={{ height: '100vh' }}>
        <AddTransaction setIsVisibleModal={setOpenModal} />
      </Modal>
    </Box>
  );
};

export default Dashboard;
