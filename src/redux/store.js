import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const rootReducer = combineReducers({
    books:booksReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer,applyMiddleware(thunk))

export const persistor = persistStore(store)