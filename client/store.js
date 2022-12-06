import { configureStore } from '@reduxjs/toolkit'

import controlSpeed from './controlSpeedSlice'

const store = configureStore({
  reducer: {
    controlSpeed,
  },
})

export default store