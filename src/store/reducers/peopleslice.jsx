import { createSlice } from '@reduxjs/toolkit'

export const peopleslice = createSlice({
  name: 'people',
  initialState: {
    info:"null"
  },
  reducers: {
    loadPeople: (state, action) => {
      state.info = action.payload
    },
    removePeople: (state, action) => {
      state.info = null
    }


  }
})

export const { loadPeople,removePeople } = peopleslice.actions
export default peopleslice.reducer