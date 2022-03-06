import {combineReducers} from 'redux'
import auth from './auth'
import vehicles from './vehicles'
import detailVehicle from './detailVehicle'
import transaction from './transaction'
import histories from './histories'

const rootReducer = combineReducers({
  auth,
  vehicles,
  detailVehicle,
  transaction,
  histories,
})

export default rootReducer