import { configureStore } from '@reduxjs/toolkit'

import fruits from './slices/index'

const store = configureStore({
  reducer: {
    fruits,
  },
})

export default store
