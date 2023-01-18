import dayjs, { Dayjs } from 'dayjs';

export type DataType = {
  [x: string]: string | number | Date | Dayjs | dayjs.Dayjs;
};
