import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logout } from 'redux/auth/operations';
import { addUser, deleteUser, fetchContacts } from './operations';

const usersSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(logout.fulfilled, state => {
        state.items = [];
      })
      .addMatcher(
        isAnyOf(fetchContacts.pending, addUser.pending, deleteUser.pending),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(fetchContacts.rejected, addUser.rejected, deleteUser.rejected),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addUser.fulfilled,
          deleteUser.fulfilled,
          logout.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});

export const usersReducer = usersSlice.reducer;
