import { Summary } from '@/interface/summary.interface';
import { formatMoney } from '@/utils/formatMoney';
import { ColumnsType } from 'antd/es/table';
import { format, parse } from 'date-fns/esm';
import { ptBR, pt } from 'date-fns/esm/locale';

const dateLocales = { pt: pt, ptBr: ptBR };

export const columns: ColumnsType<Summary> = [
  {
    title: 'Mês/Ano',
    dataIndex: 'yearMonth',
    key: 'yearMonth',
    render(value) {
      return format(parse(value, 'yyyy-MM', new Date()), 'MMMM yyyy', {
        locale: dateLocales.ptBr,
      });
    },
  },
  {
    title: 'Receita',
    dataIndex: 'recipeValue',
    key: 'recipeValue',
    render(value) {
      return formatMoney(value);
    },
  },
  {
    title: 'Despesa',
    dataIndex: 'expenseValue',
    key: 'expenseValue',
    render(value) {
      return formatMoney(value);
    },
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    render(value) {
      return formatMoney(value);
    },
  },
];
