// src/redux/commonSlice.js

import { createSlice } from '@reduxjs/toolkit'
import { deleteCookie, setCookie } from 'cookies-next'
import { IRedux } from '../types'

const initialState: IRedux['common'] = {
  future_order_time: '',
  filter_by_tags: [],
  filter_by: '',
  isMapModal: false,
  isMapModalLg: false,
  location: null,
  branch: null,
  orderIds: null,
  deliveryZoneId: null,
  searchedProduct: '',
  editingPoint: null,
  creatingPoint: false,
  points: [],
  order_type: {
    id: '04735eda-6180-477d-93ac-30dfb3c35007',
    type: 'delivery',
  },
}

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    futureTime: (state, action) => {
      state.future_order_time = action.payload
    },
    setFilterTags: (state, action) => {
      state.filter_by_tags = action.payload
      setCookie('filtered_by_tags', action.payload, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    },
    setFilter: (state, action) => {
      state.filter_by = action.payload
    },

    setDeliveryZoneId: (state, action) => {
      state.deliveryZoneId = action.payload
    },
    findProduct: (state, action) => {
      state.searchedProduct = action.payload
    },
    clearSearch: (state) => {
      state.searchedProduct = ''
    },
    saveOrderType: (state, action) => {
      state.order_type = action.payload
      setCookie('delivery_type', action.payload?.type, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    },
    saveBranchData: (state, action) => {
      state.branch = action.payload
      setCookie('branch_id', action.payload?.id, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      setCookie('branch_slug', action.payload?.slug, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      setCookie('menu_id', action.payload?.menu_id, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    },
    clearBranchData: (state) => {
      state.branch = null
      deleteCookie('branch_id')
      deleteCookie('branch_slug')
      deleteCookie('menu_id')
    },
    onOpenMap: (state) => {
      state.isMapModal = true
    },
    onCloseMap: (state) => {
      state.isMapModal = false
      state.editingPoint = null
      state.creatingPoint = false
    },
    saveLocation: (state, action) => {
      state.location = action.payload
    },
    setOrderIds: (state, action) => {
      state.orderIds = action.payload
    },
    setMapModalLg: (state, action) => {
      state.isMapModalLg = action.payload
    },
    clearOrderIds: (state) => {
      state.orderIds = null
    },
    createPoint: (state) => {
      state.isMapModal = true
      state.creatingPoint = true
    },
    openPoint: (state, action) => {
      state.isMapModal = true
      state.editingPoint = action.payload
    },
    savePoint: (state, action) => {
      state.points = state.points
        .filter((item) => item.address !== action.payload?.address)
        .map((item) => ({ ...item, isActive: false }))
      state.points.push(action.payload)
      state.location = action.payload.location
      state.editingPoint = null
    },
    updatePoint: (state, action) => {
      state.points = state.points.map((item) =>
        item.id === state.editingPoint?.id
          ? action.payload
          : { ...item, isActive: false }
      )
      state.location = action.payload.location
      state.editingPoint = null
    },
    activatePoint: (state, action) => {
      const selectedPoint = state.points.find(
        (item) => item.id === action.payload
      )
      if (selectedPoint?.location) {
        state.points = state.points.map((item) =>
          item.id !== selectedPoint.id
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
        state.location = selectedPoint.location
      }
    },
    removePoint: (state, action) => {
      const pointToRemove = state.points.find(
        (item) => item.id === action.payload
      )

      if (pointToRemove?.isActive) {
        state.branch = null
        state.location = null
        deleteCookie('branch_id')
        deleteCookie('branch_slug')
        deleteCookie('menu_id')
      }

      state.points = state.points.filter((item) => item.id !== action.payload)
    },
  },
})

export default commonSlice.reducer
export const {
  createPoint,
  openPoint,
  setFilterTags,
  setFilter,
  saveLocation,
  setOrderIds,
  saveOrderType,
  saveBranchData,
  clearOrderIds,
  savePoint,
  setMapModalLg,
  updatePoint,
  removePoint,
  activatePoint,
  onOpenMap,
  onCloseMap,
  findProduct,
  clearSearch,
  clearBranchData,
  setDeliveryZoneId,
} = commonSlice.actions
export const commonActions = commonSlice.actions
