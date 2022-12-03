import { createSlice } from '@reduxjs/toolkit';
import { logout } from 'redux/auth/operations';
import { addUser, deleteUser, fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const usersSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addUser.pending]: handlePending,
    [addUser.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addUser.rejected]: handleRejected,

    [deleteUser.pending]: handlePending,
    [deleteUser.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteUser.rejected]: handleRejected,
  },
  [logout.fulfilled](state) {
    state.items = [];
    state.error = null;
    state.isLoading = false;
  },
});

export const usersReducer = usersSlice.reducer;
