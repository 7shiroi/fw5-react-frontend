import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducers'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'
import {persistStore} from 'redux-persist'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const store = createStore(
    rootReducer, 
    applyMiddleware(
      promise,
      logger
    )
  )
  
  const persistor = persistStore(store);
  
  return {store, persistor} 
} 