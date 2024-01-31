import dayjs from 'dayjs';

export interface InitialValuesFormTransaction {
  type: string;
  description: string;
  category: string;
  value: string;
  date: dayjs.Dayjs;
  bank: string;
  isPaid: boolean;
  installment: number;
  finalInstallment: number;
}
