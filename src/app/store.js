import userReducer from '../features/Auth/userSlice';
import musicPlayerReducer from '../features/MusicPlayer/musicPlayerSlice';
import commonReducer from '../features/Common/commonSlice';


const { configureStore } = require('@reduxjs/toolkit')

const rootReducer = {
  user: userReducer,
  musicPlayer: musicPlayerReducer,
  common: commonReducer,
}

const store = configureStore({
  reducer: rootReducer,
})

export default store

