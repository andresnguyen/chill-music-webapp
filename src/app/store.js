const { configureStore } = require('@reduxjs/toolkit')

const rootReducer = {}

const store = configureStore({
  reducer: rootReducer,
})

export default store
