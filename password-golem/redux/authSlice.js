import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    accessToken: null,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload
    },
  },
})

export const { login } = authSlice.actions

export default authSlice.reducer
