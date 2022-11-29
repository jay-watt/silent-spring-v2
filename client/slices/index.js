import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getFruits } from '../api'

export const fetchFruits = createAsyncThunk('fruits/fetchFruits', () => {
  getFruits()
})

const slice = createSlice({
  name: 'fruits',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchFruits.pending]: (_, { payload }) => payload,
  },
})

export default slice.reducer
