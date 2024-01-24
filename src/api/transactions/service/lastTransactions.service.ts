import api from '../../../services/api';
import {
  LastTransactions,
  ResponseLastTransactions,
} from '../interface/lastTransactions.interface';

export const lastTransactions = ({ userId }: LastTransactions) => {
  return api
    .get<ResponseLastTransactions>(`transactions/user/${userId}/last`)
    .catch(err => ({
      ...err,
      data: {
        transactions: [
          {
            category: {
              name: 'Fast food',
            },
            type: '-',
            value: 20,
            date: '2023-09-06',
          },
          {
            category: {
              name: 'Fast food',
            },
            type: '-',
            value: 20,
            date: '2023-09-06',
          },
          {
            category: {
              name: 'Fast food',
            },
            type: '-',
            value: 20,
            date: '2023-09-06',
          },
          {
            category: {
              name: 'Fast food',
            },
            type: '-',
            value: 20,
            date: '2023-09-06',
          },
          {
            category: {
              name: 'Fast food',
            },
            type: '-',
            value: 20,
            date: '2023-09-06',
          },
          {
            category: {
              name: 'Fast food',
            },
            type: '-',
            value: 20,
            date: '2023-09-06',
          },
        ],
      },
    }));
};
