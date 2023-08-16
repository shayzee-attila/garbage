import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { email: '', password: ''}, // Initial state should be an empty object
  reducers: {
    login: (state, action) => {
      return { ...action.payload }; // This action sets the user data in the state
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;

