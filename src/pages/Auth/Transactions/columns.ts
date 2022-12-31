import { Transactions } from '@/interface/transactions.interface';
import { formatMoney } from '@/utils/formatMoney';
import { ColumnsType } from 'antd/es/table';

export const columns: ColumnsType<Transactions> = [
  // {
  //   title: '',
  //   dataIndex: 'icon',
  //   key: 'icon',
  // },
  {
    title: 'Categoria',
    dataIndex: 'category',
    key: 'category',
    render(value) {
      return value.name;
    },
  },
  {
    title: 'Data',
    dataIndex: 'date',
    key: 'date',
  },

  {
    title: 'Valor',
    dataIndex: 'value',
    key: 'value',
    render(value) {
      return formatMoney(value);
    },
  },
  {
    title: 'Tipo',
    dataIndex: 'type',
    key: 'type',
    render(value) {
      const typeFormat = value === '+' ? 'Entrada' : 'Despesa';
      return typeFormat;
    },
  },
];
