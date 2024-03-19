import { CSSProperties, useEffect, useState } from 'react';

import { AddTransaction } from './AddTransaction';
import { Transactions } from './components/Transactions';
import { Investments } from './components/Investments';
import { useModal } from '@/context/modal';
import MonthlyGoals from './components/MonthlyGoals';
import api from '../../../services/api';
import { useUser } from '@/hooks/useUser';
import ModalMonthly from '@/components/ModalMonthly';
import LoandingSpinner from '@/components/LoadingSpinner';

export interface IReportMonthly {
  expenseValue: number;
  goal: number;
  id: string;
  recipeValue: number;
  total: number;
  userId: string;
  year: string;
  yearMonth: string;
}

const Dashboard = () => {
  const { modal } = useModal();
  const { userAccess } = useUser();
  const [reportMonthly, setReportMonthly] = useState<IReportMonthly | null>(
    null,
  );
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const dateAt = new Date();
  const captureMonth = dateAt.getMonth() + 1;
  const monthFormatted = captureMonth <= 9 ? '0' + captureMonth : captureMonth;
  const year = new Date().toLocaleDateString('pt-br', { year: 'numeric' });
  const loadReportMonthly = async () => {
    try {
      const response = await api.get(
        `/transactions/reports-monthly?userId=${userAccess.id}&yearMonth=${year}-${monthFormatted}`,
      );
      setReportMonthly(response.data.reportMonthly);
    } catch (error) {
      console.error('Error fetching monthly reports:', error);
    }
  };

  useEffect(() => {
    loadReportMonthly();
  }, []);

  return (
    <>
      <div
        style={{
          margin: 8,
        }}
      >
        <Transactions
          recipeValue={reportMonthly?.recipeValue}
          expenseValue={reportMonthly?.expenseValue}
          totalValue={reportMonthly?.total ?? 0}
        />
        <Investments />
        {/* <Cards />  */}
      </div>
      {!reportMonthly ? (
         <LoandingSpinner/>
      ) : (
        <MonthlyGoals
          expenseValue={reportMonthly?.expenseValue}
          goalValue={reportMonthly?.goal}
          year={reportMonthly?.year ?? '1999'}
        />
      )}
      {modal?.addTransaction?.isOpen && <AddTransaction />}
      {modal?.updateGoal?.isOpen && reportMonthly?.id && (
        <ModalMonthly
          dataMonthly={{
            id: reportMonthly.id,
            goal: reportMonthly.goal ?? 0,
            userId: reportMonthly.userId,
          }}
        />
      )}
    </>
  );
};

export default Dashboard;
