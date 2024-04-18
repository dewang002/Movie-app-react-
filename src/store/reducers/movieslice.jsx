import { createSlice } from '@reduxjs/toolkit'

export const movieslice = createSlice({
  name: 'movie',
  initialState: {
    info:"null"
  },
  reducers: {
    loadMovie: (state, action) => {
      state.info = action.payload
    },
    removeMovie: (state, action) => {
      state.info = null
    }

  }
})

export const { loadMovie,removeMovie } = movieslice.actions
export default movieslice.reducer