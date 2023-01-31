import { summaryService } from '@/api/summary/service';
import { useUser } from '@/hooks/useUser';
import { Summary } from '@/interface/summary.interface';
import { Table } from 'antd';
import { useState, useCallback, useEffect } from 'react';
import { tableColumnsMonth } from '../config';

interface TransactionTableMonthProps {
  typeSummary: string;
  typeTable: string;
}

export const TransactionTableMonth = ({
  typeSummary,
  typeTable,
}: TransactionTableMonthProps) => {
  const activeTable = typeSummary === typeTable;
  const {
    userAccess: { id: userId },
  } = useUser();

  const [summary, setSummary] = useState<Summary[]>([]);
  const [loading, setLoading] = useState(true);

  const loadSummary = useCallback(async () => {
    setLoading(true);
    try {
      const response = await summaryService.findSummary({ userId: userId! });

      if (response.status !== 200) throw new Error('Falha ao buscar dados!');

      setSummary(response.data.summary);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    if (activeTable) {
      loadSummary();
    }
  }, [activeTable]);

  if (activeTable) {
    return (
      <Table
        columns={tableColumnsMonth}
        dataSource={summary}
        loading={loading}
        rowKey="id"
        sticky
      />
    );
  }

  return <></>;
};
