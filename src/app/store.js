import userReducer from '../features/Auth/userSlice';
import musicPlayerReducer from '../features/MusicPlayer/musicPlayerSlice';

const { configureStore } = require('@reduxjs/toolkit')

const rootReducer = {
  user: userReducer,
  musicPlayer: musicPlayerReducer,
}

const store = configureStore({
  reducer: rootReducer,
})

export default store

