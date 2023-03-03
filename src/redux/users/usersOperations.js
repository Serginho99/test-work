import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = createAsyncThunk(
  'users/get',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BASE_URL}/users`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userPosts = createAsyncThunk(
  'user/posts',
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BASE_URL}/posts?userId=${data}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const userAlbums = createAsyncThunk(
  'users/albums',
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${BASE_URL}/albums?userId=${data}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
