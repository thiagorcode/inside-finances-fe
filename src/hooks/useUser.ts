import create from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id?: string;
  username?: string;
  email?: string;
  active?: boolean;
}

interface UserState {
  userAccess: User;
  increase: (user: User) => void;
}

export const useUser = create<UserState>()(
  persist(
    (set, get) => ({
      userAccess: {},
      increase: (user: User) => set({ userAccess: user }),
    }),
    {
      name: '@ifinances/user',
      getStorage: () => localStorage,
    },
  ),
  // persist(() => ({}), {
  //   name: '@finances/user-session',
  //   getStorage: () => localStorage,
  // }),
);
