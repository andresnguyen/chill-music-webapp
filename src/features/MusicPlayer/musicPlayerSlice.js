import { createSlice } from '@reduxjs/toolkit'
import StorageKeys from 'constants/storage-keys'

const saveSongList = (songList) => {
  localStorage.setItem('songList', JSON.stringify(songList))
}

const musicPlayerSlice = createSlice({
  name: 'musicPlayer',
  initialState: {
    isDrawerOpen: false,
    playing: false,
    repeat: JSON.parse(localStorage.getItem('repeat')) || false,
    seeking: JSON.parse(localStorage.getItem('seeking')) || false,
    random: JSON.parse(localStorage.getItem('random')) || false,
    currentIndex: 0,
    currentVolume: JSON.parse(localStorage.getItem('currentVolume')) || 10,
    indexList: JSON.parse(localStorage.getItem('indexList')) || [],
    songList: JSON.parse(localStorage.getItem('songList')) || [],
  },
  reducers: {
    logout(state) {
      // clear local storage
      localStorage.removeItem(StorageKeys.USER)
      localStorage.removeItem(StorageKeys.TOKEN)

      state.current = {}
    },

    changeMusicPlayerValue(state, action) {
      const actionList = ['seeking', 'random', 'repeat', 'currentVolume', 'indexList']
      if (actionList.includes(action.payload.name)) {
        localStorage.setItem(action.payload.name, JSON.stringify(action.payload.value))
      }
      state[action.payload.name] = action.payload.value
    },

    pushToSongList(state, action) {
      const song = action.payload
      const currentIndex = state.songList.findIndex((songItem) => songItem?._id === song?._id)

      if (currentIndex === state.currentIndex) {
        state.playing = !state.playing
        return
      }

      if (currentIndex === -1) {
        state.songList.unshift(song)
        saveSongList(state.songList)
      }

      state.currentIndex = currentIndex > 0 ? currentIndex : 0
      state.playing = true
    },

    addASongPriority(state, action) {
      const song = action.payload
      if (state.songList.length === 0) {
        state.songList.push(song)
      } else {
        state.songList.splice(state.currentIndex + 1, 0, song)
      }
      state.playing = true
      saveSongList(state.songList)
    },

    addASong(state, action) {
      const song = action.payload
      state.songList.push(song)
      state.playing = true
      saveSongList(state.songList)
    },

    changeSongList(state, action) {
      const songList = action.payload
      saveSongList(songList)

      state.songList = songList
      state.currentIndex = 0
      state.playing = true
    },
  },
})

const { actions, reducer } = musicPlayerSlice
export const { logout, changeMusicPlayerValue, pushToSongList, changeSongList, addASongPriority, addASong } = actions
export default reducer
