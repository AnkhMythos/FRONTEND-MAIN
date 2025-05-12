import { User } from './User';

export type UserState = {
  users: User[];
  selectedUser: User | null;
  loading: boolean;
  error: string | null;
};