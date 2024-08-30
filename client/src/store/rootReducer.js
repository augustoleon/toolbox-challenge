import { combineReducers } from 'redux'
import filesReducer from '../reducers/filesReducer'

const rootReducer = combineReducers({
  example: filesReducer
})

export default rootReducer
