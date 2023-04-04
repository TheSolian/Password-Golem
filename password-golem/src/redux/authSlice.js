import { createSlice } from '@reduxjs/toolkit'
import { auth } from '../firebase/config'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    username: 'username',
  },
  reducers: {
    login: (state, action) => {
      state.username = action.payload
    },
    logout: (state) => {
      state.username = null
      auth.signOut()
    },
  },
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
