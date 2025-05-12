import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../../domain/users/index";
import { fetchUsersThunk, fetchUserByIdThunk, createUserThunk, updateUserThunk, deleteUserThunk } from "../thunks/userThunks";

const initialState: UserState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearSelectedUser: (state) => {
      state.selectedUser = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // fetchUsers
      .addCase(fetchUsersThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsersThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsersThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // fetchUserById
      .addCase(fetchUserByIdThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserByIdThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedUser = action.payload;
      })
      .addCase(fetchUserByIdThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // createUser
      .addCase(createUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUserThunk.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // updateUser
      .addCase(updateUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserThunk.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      // deleteUser
      .addCase(deleteUserThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUserThunk.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearSelectedUser } = userSlice.actions;
export default userSlice.reducer;
