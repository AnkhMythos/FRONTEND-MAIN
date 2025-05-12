import { User } from "../../domain/users/User";
import { UserRepository } from "../../domain/users/UserRepository";

// Recive the implementation (for now UserRepositoryJson) and uses it

export const fetchUsersService = async (userRepository: UserRepository): Promise<User[]> => {
  return await userRepository.fetchUsers();
};

export const fetchUserByIdService = async (userRepository: UserRepository, id: string): Promise<User | null> => {
  return await userRepository.fetchUserById(id);
};

export const createUserService = async (userRepository: UserRepository, user: User): Promise<void> => {
  await userRepository.createUser(user);
};

export const updateUserService = async (userRepository: UserRepository, user: User): Promise<void> => {
  await userRepository.updateUser(user);
};

export const deleteUserService = async (userRepository: UserRepository, id: string): Promise<void> => {
  await userRepository.deleteUser(id);
};
