import {combineReducers} from 'redux'

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
  auth: (state=initialState, action) => {
    switch(action.type){
      case 'LOGIN_PENDING': {
        state.isLoading = true
        return state
      }
      case 'LOGIN_FULFILLED': {
        state.isLoading = false
        if(action.payload.status === 200){
          state.token = action.payload.data.token
        }else{
          state.error = true
        }
        return state
      }
      case 'LOGIN_REJECTED': {
        state.isLoading = false
        state.error = true
        return state
      }
      case 'LOGOUT': {
        return state
      }
      default: {
        return state
      }
    }
  },

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