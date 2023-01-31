import { useCallback, useState } from 'react';
import * as S from './styles';
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from '@mui/icons-material';
import { DatePicker, Space } from 'antd';
import { Input } from '@/components/Form';
import { InitialValueForm } from './transactions.general';
import { TransactionCategory } from '@/interface/transactionCategory.interface';
import dayjs from 'dayjs';

interface TransactionsFiltersProps {
  valueForm: InitialValueForm;
  categoryFiltered: TransactionCategory[];
  changeDate: (date: dayjs.Dayjs | null, dateString: string) => void;
  changeValueForm: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TransactionsFilters = ({
  valueForm,
  categoryFiltered,
  changeValueForm,
  changeDate,
}: TransactionsFiltersProps) => {
  const [isHideFilter, setIsHideFilter] = useState(false);

  const handleToggleHideFilter = useCallback(() => {
    setIsHideFilter(value => !value);
  }, []);

  return (
    <S.ContainerFilters>
      <Space
        direction="vertical"
        size="middle"
        style={{
          display: 'flex',
          maxHeight: isHideFilter ? 0 : '300px',
          overflow: 'hidden',
          transition: 'max-height 0.4s ease-out',
        }}
      >
        <Input label="Tipo:" name="type" onChange={changeValueForm}>
          <select>
            <option value="">Selecione</option>
            <option value="+">Receita</option>
            <option value="-">Despesa</option>
          </select>
        </Input>
        {!!valueForm.type && (
          <Input
            label="Categoria:"
            name="categoryId"
            onChange={changeValueForm}
          >
            <select>
              <option value="">Selecione</option>
              {categoryFiltered.map(_category => (
                <option key={_category.id} value={_category.id}>
                  {_category.name}
                </option>
              ))}
            </select>
          </Input>
        )}
        <S.ContainerDate>
          <Input label="Data:" name="date">
            <DatePicker
              onChange={changeDate}
              placeholder=""
              picker="month"
              value={valueForm.date}
            />
          </Input>
        </S.ContainerDate>
      </Space>
      {isHideFilter ? (
        <button type="button" onClick={handleToggleHideFilter}>
          <KeyboardArrowDownRounded style={{ color: '#fff' }} />
        </button>
      ) : (
        <button type="button" onClick={handleToggleHideFilter}>
          <KeyboardArrowUpRounded style={{ color: '#fff' }} />
        </button>
      )}
    </S.ContainerFilters>
  );
};
