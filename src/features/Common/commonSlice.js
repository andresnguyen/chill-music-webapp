import { createSlice } from '@reduxjs/toolkit'

const commonSlice = createSlice({
  name: 'common',
  initialState: {
   songDeleteOpen: false,
   songUpdateOpen: false,
   songCreateOpen: false,
   songCreateData: {},
   songUpdateData: {},
   songDeleteData: {},

   playlistDeleteOpen: false,
   playlistUpdateOpen: false,
   playlistCreateOpen: false,
   playlistCreateData: {},
   playlistUpdateData: {},
   playlistDeleteData: {},

  },
  reducers: {
    changeValueCommon(state, action) {
      state[action.payload.name] = action.payload.value
    },
  },
})

const { actions, reducer } = commonSlice
export const { changeValueCommon } = actions
export default reducer
