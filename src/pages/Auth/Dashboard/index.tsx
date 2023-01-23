import { Box } from '@mui/system';

import Header from '../../../components/Header';
import MobileMenu from '../../../components/MobileMenu';
import Button from '../../../components/Button';

import { AddTransaction } from './AddTransaction';
import { Transactions } from './components/Transactions';
import { Investments } from './components/Investments';
import { Cards } from './components/Cards';
import { useModal } from '@/context/modal';

const Dashboard = () => {
  const { modal } = useModal();
  return (
    <>
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
        {/* <Cards />  */}
      </Box>
      <MobileMenu />
      {modal?.addTransaction?.isOpen && <AddTransaction />}
    </>
  );
};

export default Dashboard;
