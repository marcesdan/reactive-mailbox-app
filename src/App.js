import React from 'react'
import './App.css'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'

import createStore from './Redux'
import {Provider} from 'react-redux'
import RootContainer from './Containers/RootContainer'

// create our store
const store = createStore()
const persistor = persistStore(store)

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={'HIIIIIIIIIIIIIIIII'} persistor={persistor}>
        <RootContainer/>
      </PersistGate>
    </Provider>
  )
}

export default App
