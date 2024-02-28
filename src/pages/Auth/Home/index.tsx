import { Box } from '@mui/system';

import { AddTransaction } from './AddTransaction';
import { Transactions } from './components/Transactions';
import { Investments } from './components/Investments';
import { Cards } from './components/Cards';
import { useModal } from '@/context/modal';
import MonthlyGoals from './components/MonthlyGoals';

const Dashboard = () => {
  const { modal } = useModal();
  return (
    <>
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
      <MonthlyGoals/>
      {modal?.addTransaction?.isOpen && <AddTransaction />}
    </>
  );
};

export default Dashboard;
