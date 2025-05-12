import { User, UserType, Permission } from '../../../src/domain/users/index';
import { UserRepository } from '../../../src/domain/users/UserRepository';
import usersJson from '../../fake-api/users.json';

export class UserRepositoryLocal implements UserRepository {
  private users: User[];

  // The constructor initializes the UserRepositoryLocal class by loading user data from a JSON file and mapping it to the User type.
  constructor() {
    this.users = usersJson.map((user) => ({
      ...user,
      userType: user.userType as UserType,
      permissions: user.permissions as Permission[],
    }));
  }
  async fetchUsers(): Promise<User[]> {
    return this.users;
  }

  async fetchUserById(id: string): Promise<User | null> {
    const user = this.users.find((u) => u.id === id);
    return user || null;
  }

  async createUser(user: User): Promise<void> {
    this.users.push(user);
  }

  async updateUser(updatedUser: User): Promise<void> {
    this.users = this.users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
  }

  async deleteUser(id: string): Promise<void> {
    this.users = this.users.filter((user) => user.id !== id);
  }
}

export const userRepository = new UserRepositoryLocal();
