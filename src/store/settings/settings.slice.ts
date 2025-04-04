import { createSlice } from '@reduxjs/toolkit'
import { setCookie, getCookie } from 'cookies-next'
import { IRedux } from '../types'

const initialState: IRedux['settings'] = {
  fcm_token: '',
  country: { iso_code: 'UZ', currency: 'UZS' },
  data: null,
}

const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    saveFCM: (state, action) => {
      state.fcm_token = action.payload
    },
    setCountry: (state, action) => {
      state.country = action.payload
    },
    setWebSettings: (state, action) => {
      state.data = action.payload

      if (action.payload?.data?.color) {
        const color = getCookie('color')

        if (action.payload?.data?.color !== color) {
          setCookie('color', action.payload?.data?.color, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          })
        }
      }
      if (action.payload?.shipper_id) {
        const shipper_id = getCookie('shipper_id')

        if (action.payload?.shipper_id !== shipper_id)
          setCookie('shipper_id', action.payload?.shipper_id, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          })
      }
    },
  },
})

export default settingSlice.reducer
export const { saveFCM, setCountry, setWebSettings } = settingSlice.actions
