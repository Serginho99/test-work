import { createSlice } from '@reduxjs/toolkit';
import { getUsers, userPosts, userAlbums } from './usersOperations';

const initialState = {
  users: [],
  posts: [],
  albums: [],
  isLoading: false,
  error: null,
};

const isPending = state => {
  state.isLoading = true;
};

const isRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  extraReducers: {
    [getUsers.fulfilled](state, { payload }) {
      state.users = payload;
      state.isLoading = false;
      state.error = null;
    },
    [getUsers.pending]: isPending,
    [getUsers.rejected]: isRejected,

    [userPosts.fulfilled](state, { payload }) {
      state.posts = payload;
      state.isLoading = false;
      state.error = null;
    },
    [userPosts.pending]: isPending,
    [userPosts.rejected]: isRejected,

    [userAlbums.fulfilled](state, { payload }) {
      state.albums = payload;
      state.isLoading = false;
      state.error = null;
    },
    [userAlbums.pending]: isPending,
    [userAlbums.rejected]: isRejected,
  },
});

export const usersReducer = usersSlice.reducer;
