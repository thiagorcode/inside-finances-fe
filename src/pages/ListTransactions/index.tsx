import { Box } from '@mui/system';

import MobileMenu from '../../components/MobileMenu';

import Header from '../../components/Header';
import { Modal } from '@mui/material';
import { Transactions } from './components/Transactions';
import { useModal } from '@/context/modal';

const ListTransactions = () => {
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
      </Box>
    </Box>
  );
};

export default ListTransactions;
