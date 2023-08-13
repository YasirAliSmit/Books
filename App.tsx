import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './src/navigation/navigation'
import { Provider } from 'react-redux'; 
import {store} from './src/redux/store'
import {persistor} from'./src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'
const App = () => {
  return (
    <Provider store={store}>
 <PersistGate loading={null} persistor={persistor}>

      <Navigation/>
 </PersistGate>
    </Provider>
  )
}

export default App
