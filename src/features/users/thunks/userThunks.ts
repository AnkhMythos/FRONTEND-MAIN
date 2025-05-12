import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsersService, fetchUserByIdService, createUserService, updateUserService, deleteUserService } from "../../../application/users/userServices";
import { User } from "../../../domain/users/User";
import { userRepository } from "../../../infrastructure/users/UserRepositoryLocal";

export const fetchUsersThunk = createAsyncThunk<User[]>(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    try {
      const users = await fetchUsersService(userRepository);
      return users;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch users: " + error);
    }
  }
);

export const fetchUserByIdThunk = createAsyncThunk<User | null, string>(
  "users/fetchUserById",
  async (id, thunkAPI) => {
    try {
      const user = await fetchUserByIdService(userRepository, id);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch user by id: " + error);
    }
  }
);

export const createUserThunk = createAsyncThunk<void, User>(
  "users/createUser",
  async (user, thunkAPI) => {
    try {
      await createUserService(userRepository, user);
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to create user: " + error);
    }
  }
);

export const updateUserThunk = createAsyncThunk<void, User>(
  "users/updateUser",
  async (user, thunkAPI) => {
    try {
      await updateUserService(userRepository, user);
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to update user: " + error);
    }
  }
);

export const deleteUserThunk = createAsyncThunk<void, string>(
  "users/deleteUser",
  async (id, thunkAPI) => {
    try {
      await deleteUserService(userRepository, id);
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to delete user: " + error);
    }
  }
);
