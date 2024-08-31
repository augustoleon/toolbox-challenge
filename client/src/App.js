import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import FilesContainer from './components/FilesContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

function App () {
  return (
    <Provider store={store}>
      <FilesContainer />
    </Provider>
  )
}

export default App
