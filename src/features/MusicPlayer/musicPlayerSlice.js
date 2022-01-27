import { createSlice } from '@reduxjs/toolkit';
import StorageKeys from 'constants/storage-keys';

const songList = [
  {
    name: 'Phố Đã Lên Đèn',
    imageUrl: 'https://vikdang.github.io/Code_web_music_player/assets/img/music/listSong1/song21.jpg',
    songUrl: 'https://vikdang.github.io/Code_web_music_player/assets/music/listSong1/song21.mp3',
  },
  {
    name: 'Thiên Lý Ơi',
    imageUrl: '	https://vikdang.github.io/Code_web_music_player/assets/img/music/listSong1/song20.jpg',
    songUrl: 'https://vikdang.github.io/Code_web_music_player/assets/music/listSong1/song20.mp3',
  },
  {
    name: 'Tộc ca',
    imageUrl: '	https://vikdang.github.io/Code_web_music_player/assets/img/music/listSong1/song19.jpg',
    songUrl: 'https://vikdang.github.io/Code_web_music_player/assets/music/listSong1/song19.mp3',
  },
  {
    name: 'Hãy trao cho anh',
    imageUrl: '	https://vikdang.github.io/Code_web_music_player/assets/img/music/listSong1/song18.jpg',
    songUrl: 'https://vikdang.github.io/Code_web_music_player/assets/music/listSong1/song18.mp3',
  },
]

const musicPlayerSlice = createSlice({
  name: 'musicPlayer',
  initialState: {
    isDrawerOpen: false,
    playing: false,
    repeat: false,
    seeking: false,
    random: false,
    currentIndex: 0,
    currentVolume: 10,
    indexList: [],
    songList: songList
  },
  reducers: {
    logout(state) {
      // clear local storage
      localStorage.removeItem(StorageKeys.USER);
      localStorage.removeItem(StorageKeys.TOKEN);

      state.current = {};
    },

    changeMusicPlayerValue(state, action) {
      state[action.payload.name] = action.payload.value
    }
  }
});

const { actions, reducer } = musicPlayerSlice;
export const { logout, changeMusicPlayerValue } = actions;
export default reducer;
