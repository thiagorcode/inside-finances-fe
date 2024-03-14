import create from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id?: string;
  username?: string;
  email?: string;
  token?: string;
}

interface UserState {
  userAccess: User;
  increase: (user: User) => void;
}

export const useUser = create<UserState>()(
  persist(
    set => ({
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
