import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducers/movieslice'
import tvReducer from './reducers/tvslice'
import poepleReducer from './reducers/peopleslice'
export default configureStore({
     
  reducer: {
    movie:movieReducer,
    tv:tvReducer,
    poeple:poepleReducer
  }
  
})

