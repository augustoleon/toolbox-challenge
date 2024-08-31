import { combineReducers } from 'redux'
import filesSlices from '../slices/filesSlices'

const rootReducer = combineReducers({
  files: filesSlices
})

export default rootReducer
