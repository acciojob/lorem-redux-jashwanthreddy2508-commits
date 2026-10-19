import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './fetchslice'

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
})

export default store;