import {combineReducers} from 'redux'
import auth from './auth'
import vehicles from './vehicles'
import detailVehicle from './detailVehicle'
import transaction from './transaction'

const rootReducer = combineReducers({
  auth,
  vehicles,
  detailVehicle,
  transaction
})

export default rootReducer