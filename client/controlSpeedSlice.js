import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movementSpeed: 20,
  lookSpeed: 0.05
}

const controlsSlice = createSlice({
  name: 'controlSpeed',
  initialState,
  reducers: {
    changeControlSpeed: (state, action) => {
      return {
        movementSpeed: action.payload.move,
        lookSpeed: action.payload.look
      }
    }
  }
})

export const selectControlSpeed = (state) => state.controlSpeed
export const { changeControlSpeed } = controlsSlice.actions
export default controlsSlice.reducer