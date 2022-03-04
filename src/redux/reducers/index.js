import {combineReducers} from 'redux'
import auth from './auth'

const initialState = {
  token: null,
  isLoading: false,
  error: false
}

const vehiclesState = {
  data: [],
  pageInfo: {},
  isLoading: false,
  error: false
}

const rootReducer = combineReducers({
  auth,

  vehicles: (state=vehiclesState, action) => {
    switch(action.type){
      case 'GET_VEHICLES_PENDING':{
        state.isLoading =true
        return state
      }
      case 'GET_VEHICLES_FULFILLED': {
        const {data} = action.payload
        state.data = data.result
        state.pageInfo = data.pageinfo
        state.isLoading = false
        return state
      }
      case 'GET_VEHICLES_REJECTED': {
        state.isLoading = false
        state.isError = true
        return state
      }
      case 'GET_VEHICLES_NEXT_PENDING':{
        state.isLoading =true
        return state
      }
      case 'GET_VEHICLES_NEXT_FULFILLED': {
        const {data} = action.payload
        state.data = [...state.data, ...data.result]
        state.pageInfo = data.pageinfo
        state.isLoading = false
        return state
      }
      case 'GET_VEHICLES_NEXT_REJECTED': {
        state.isLoading = false
        state.isError = true
        return state
      }
      default: {
        return state
      }
    }
  }
})

export default rootReducer