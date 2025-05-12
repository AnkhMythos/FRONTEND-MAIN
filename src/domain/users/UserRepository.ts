import { User } from './User';

export interface UserRepository {
  fetchUsers(): Promise<User[]>;
  fetchUserById(id: string): Promise<User | null>;
  createUser(user: User): Promise<void>;
  updateUser(user: User): Promise<void>;
  deleteUser(id: string): Promise<void>;
}
// This interface defines the contract for a user repository, which includes methods for fetching, creating, updating, and deleting users.