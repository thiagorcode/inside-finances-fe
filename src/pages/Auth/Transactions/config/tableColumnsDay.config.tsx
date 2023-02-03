import { Transactions } from '@/interface/transactions.interface';
import { formatMoney } from '@/utils/formatMoney';
import { InfoOutlined } from '@mui/icons-material';
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
    render(value, record) {
      console.log(record);
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <span>{formatMoney(value)}</span>
          <span style={{ width: '20px', height: '22px' }}>
            {!record.isPaid && (
              <InfoOutlined
                style={{ color: '#e9c46a', width: '22px', height: '22px' }}
              />
            )}
          </span>
        </div>
      );
    },
  },
  // {
  //   title: 'Tipo',
  //   dataIndex: 'type',
  //   key: 'type',
  //   render(value) {
  //     const typeFormat = value === '+' ? 'Receita' : 'Despesa';
  //     return typeFormat;
  //   },
  // },
];
