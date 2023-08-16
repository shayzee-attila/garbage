import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { email: '', password: ''}, 
  reducers: {
    login: (state, action) => {
      return { ...action.payload }; 
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;

