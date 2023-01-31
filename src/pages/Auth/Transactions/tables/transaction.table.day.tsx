import { useModal } from '@/context/modal';
import { Transactions } from '@/interface/transactions.interface';
import { Table } from 'antd';
import { useCallback } from 'react';
import { tableColumnsDay } from '../config';

interface TransactionTableDayProps {
  loadTransactions(): void;
  transactions: Transactions[];
  loading: boolean;
  typeSummary: string;
  typeTable: string;
}

export const TransactionTableDay = ({
  loadTransactions,
  transactions,
  loading,
  typeSummary,
  typeTable,
}: TransactionTableDayProps) => {
  const { toggleModal } = useModal();

  const handleEditTransaction = useCallback(
    (id: string) => {
      toggleModal({
        manageTransaction: {
          isOpen: true,
          data: {
            id,
            afterSaveLoad: () => loadTransactions(),
          },
        },
      });
    },
    [toggleModal, loadTransactions],
  );

  if (typeSummary === typeTable) {
    return (
      <Table
        columns={tableColumnsDay}
        dataSource={transactions}
        loading={loading}
        rowKey="id"
        sticky
        onRow={record => {
          return {
            onClick: () => handleEditTransaction(record.id),
          };
        }}
      />
    );
  }

  return <></>;
};
