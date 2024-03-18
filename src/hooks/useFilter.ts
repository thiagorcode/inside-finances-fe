import create from 'zustand';
import { persist } from 'zustand/middleware';

export interface FilterProps {
  category?: string;
  type?: string;
  status?: boolean;
  initDate?: string;
  endDate?: string;
}

interface FilterState {
  filter: FilterProps;
  saveFilter: (filter: FilterProps) => void;
  resetFilter: () => void;
}

export const useFilter = create<FilterState>()(
  persist(
    set => ({
      filter: {},
      saveFilter: filter => set({ filter: filter }),
      resetFilter: () => set({ filter: {} }),
    }),
    {
      name: 'filter',
      getStorage: () => sessionStorage,
    },
  ),
);

interface DateProps {
  initDate?: string;
  endDate?: string;
}

interface DateState {
  dates: DateProps;
  saveDate: (dates: DateProps) => void;
  resetDate: () => void;
}

export const useDate = create<DateState>()(set => ({
  dates: {},
  saveDate: dates => set({ dates: dates }),
  resetDate: () => set({ dates: {} }),
}));
