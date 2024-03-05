import create from 'zustand';
import { persist } from 'zustand/middleware';

interface DateProps {
  initDate?: Date;
  endDate?: Date;
}

interface DateState {
  dates: DateProps;
  saveDates: (dates: DateProps) => void;
}

export const useDate = create<DateState>()(
  persist(
    set => ({
      dates: {},
      saveDates: dates => set({ dates: dates }),
    }),
    {
      name: 'filterDate',
      getStorage: () => localStorage,
    },
  ),
);
