import * as dayjs from 'dayjs';

export interface CreateTransaction {
  bank: string;
  value: any;
  type: string;
  description: string;
  date: dayjs.Dayjs;
  category: number;
}
