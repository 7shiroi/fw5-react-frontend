import {combineReducers} from 'redux'
import auth from './auth'
import vehicles from './vehicles'
import detailVehicle from './detailVehicle'
import transaction from './transaction'
import histories from './histories'
import localStorage from 'redux-persist/es/storage'
import persistReducer from 'redux-persist/es/persistReducer'

const persistAuth = {
  key: 'auth',
  storage: localStorage
}

const rootReducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  vehicles,
  detailVehicle,
  transaction,
  histories,
})

export default rootReducer