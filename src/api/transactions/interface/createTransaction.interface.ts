import * as dayjs from 'dayjs';

export interface CreateTransaction {
  bank: string;
  value: any;
  type: string;
  description: string;
  isPaid: boolean;
  originCreate: string;
  date: dayjs.Dayjs | string;
  categoryId: string;
  userId: string;
  installment: number;
  finalInstallment: number;
}
