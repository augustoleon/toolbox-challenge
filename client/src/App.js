import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'

import './App.css'

function App () {
  return (
    <Provider store={store}>
      <div className='App App-header'>
        <div>holi</div>
      </div>

    </Provider>
  )
}

export default App
