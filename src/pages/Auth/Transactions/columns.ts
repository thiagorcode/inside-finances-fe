import { Transactions } from '@/interface/transactions.interface';
import { formatMoney } from '@/utils/formatMoney';
import { ColumnsType } from 'antd/es/table';
import { format, parse } from 'date-fns';

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
    render(value) {
      return format(parse(value, 'yyyy-MM-dd', new Date()), 'dd/MM/yyyy');
    },
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
      const typeFormat = value === '+' ? 'Receita' : 'Despesa';
      return typeFormat;
    },
  },
];
