import Header from '../../../components/Header';
import { Grid } from '@mui/material';
import { Table } from 'antd';
import MobileMenu from '../../../components/MobileMenu';
import { columns } from './columns';

const data = [
  {
    key: 1,
    category: 'Pagamento',
    value: 'R$ 120,00',
    date: '14/05/2023',
    type: 'Entrada',
  },
];

export const TransactionsGeneral = () => {
  return (
    <>
      <Header />
      <Grid>
        <Table columns={columns} dataSource={data} />
      </Grid>
      <MobileMenu />
    </>
  );
};
