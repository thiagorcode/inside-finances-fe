import * as dayjs from 'dayjs';

export interface CreateTransaction {
  bank: string;
  value: any;
  type: string;
  description: string;
  isPaid: boolean;
  date: dayjs.Dayjs | string;
  category: string;
  userId: string;
}
