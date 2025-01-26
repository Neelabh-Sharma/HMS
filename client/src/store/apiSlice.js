// src/store/apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // Import Axios

const url = "http://localhost:4000/"

// Async thunk for API call using Axios
export const fetchData = createAsyncThunk(
    'api/fetchData',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(url+'api/users'); // Use Axios for the request
            return response.data; // Axios automatically parses JSON
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || error.message || 'Something went wrong'
            );
        }
    }
);


// Async action to handle user creation
export const createUser = createAsyncThunk(
    'user/createUser',
    async (formData, { rejectWithValue }) => {
      try {
        const response = await axios.post(url+'api/users', formData);
        return response.data; // Assuming the API returns the created user
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'An error occurred');
      }
    }
  );

  export const verifyUser = createAsyncThunk(
    'auth/verifyUser',
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const response = await axios.post(url+'api/users/login', { email, password });
        return response.data; // Assuming the API returns a token and user details
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Login failed');
      }
    }
  );

  export const getUserByEmail = createAsyncThunk(
    'user/getUserByEmail',
    async (email, { rejectWithValue }) => {
      try {
        const response = await axios.get(url+`api/users/email/${email}`);
        return response.data; // Assuming the API returns the user object
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || 'Failed to fetch user');
      }
    }
  );



// Slice definition
const apiSlice = createSlice({
    name: 'api',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        // getuserdata
        builder
        .addCase(getUserByEmail.pending, (state) => {
          state.status = 'loading';
          state.error = null;
        })
        .addCase(getUserByEmail.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.user = action.payload;
        })
        .addCase(getUserByEmail.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        });

        //get all user data 
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
            // create user
            builder
            .addCase(createUser.pending, (state) => {
              state.status = 'loading';
              state.error = null;
            })
            .addCase(createUser.fulfilled, (state, action) => {
              state.status = 'succeeded';
              state.user = action.payload;
            })
            .addCase(createUser.rejected, (state, action) => {
              state.status = 'failed';
              state.error = action.payload;
            });
            // verify user login
            builder
            .addCase(verifyUser.pending, (state) => {
              state.status = 'loading';
              state.error = null;
            })
            .addCase(verifyUser.fulfilled, (state, action) => {
              state.status = 'succeeded';
              state.user = action.payload.user; // Assuming the API returns { user, token }
              state.token = action.payload.token;
            })
            .addCase(verifyUser.rejected, (state, action) => {
              state.status = 'failed';
              state.error = action.payload;
            });
    },
});

export default apiSlice.reducer;
