import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import filesReducer from '../slices/filesSlices'

const store = configureStore({
  reducer: {
    files: filesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk) // Añadimos thunk al middleware
})

export default store
