import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userAPI from 'api/userAPI'
import StorageKeys from 'constants/storage-keys'

export const register = createAsyncThunk('user/register', async (payload) => {
  const { data } = await userAPI.register(payload)

  // save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.token)
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))

  return data.data
})

export const login = createAsyncThunk('user/login', async (payload) => {
  const { data } = await userAPI.login(payload)

  // save data to local storage
  localStorage.setItem(StorageKeys.TOKEN, data.token)
  localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user))

  return data.user
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
    settings: {},
    isModalOpen: false,
    favoriteSongIdList: [],
    favoriteAlbumIdList: [],
    favoritePlaylistIdList: [],
    favoriteArtistIdList: [],
  },
  reducers: {
    logout(state) {
      // clear local storage
      localStorage.removeItem(StorageKeys.USER)
      localStorage.removeItem(StorageKeys.TOKEN)

      state.current = {}
    },

    changeValue(state, action) {
      const { name, value } = action.payload
      if (name === 'current') {
        localStorage.setItem(StorageKeys.USER, JSON.stringify(value))
      }

      state[name] = value
    },

    getFavoriteSuccess(state, action) {
      state[action.payload.name] = action.payload.value.data
    },
  },
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload
    },

    [login.fulfilled]: (state, action) => {
      state.current = action.payload
    },
  },
})

const { actions, reducer } = userSlice
export const { logout, changeValue, getFavoriteSuccess } = actions
export default reducer
