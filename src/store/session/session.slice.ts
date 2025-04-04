// src/redux/sessionSlice.js
import { createSlice } from '@reduxjs/toolkit'
import { ISession } from '../types'

const initialState: ISession = {
  mobileAd: true,
  isLocation: false,
  caniuseCookies: true,
  addressAccepted: false,
  crm_table_number: '',
  crm_table_id: '',
  is_hall: '',
  branch_id: '',
  shipper_id: '',
  platform_id: '',
  menu_id: '',
  fcm_token: '',
  chat_id: '',
  source: '',
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    closeAd: (state) => {
      state.mobileAd = false
    },
    // Save anything to session state
    save: (state, action) => {
      Object.assign(state, action.payload)
    },
    useCookies: (state) => {
      state.caniuseCookies = false
    },
    acceptAddress: (state) => {
      state.addressAccepted = true
    },
    resetAddress: (state) => {
      state.addressAccepted = false
    },
  },
})

export default sessionSlice.reducer
export const sessionActions = sessionSlice.actions
