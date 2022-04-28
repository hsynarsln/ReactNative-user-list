import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  users: [],
  page: 1,
  moreLoading: false
};

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  try {
    const response = await fetch('https://randomuser.me/api/?page=1&results=20').then(res => res.json());
    return response.results;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

export const loadMoreUsers = createAsyncThunk('users/loadMoreUsers', async page => {
  try {
    const response = await fetch(`https://randomuser.me/api/?page=${page}&results=20`).then(res => res.json());
    return response.results;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = [];
    }
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.loading = false;
    },
    [loadMoreUsers.pending]: (state, action) => {
      state.moreLoading = true;
    },
    [loadMoreUsers.fulfilled]: (state, action) => {
      state.moreLoading = false;
      state.users = state.users.concat(action.payload);
    },
    [loadMoreUsers.rejected]: (state, action) => {
      state.moreLoading = false;
    }
  }
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
