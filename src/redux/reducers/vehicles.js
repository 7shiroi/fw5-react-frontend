const initialState = {
  data: [],
  pageInfo: {},
  isLoading: false,
  error: false
}


const vehicles = (state=initialState, action) => {
  switch(action.type){
    case 'GET_VEHICLES_PENDING':{
      state.isLoading =true
      state.isLoading = false
      return {...state}
    }
    case 'GET_VEHICLES_FULFILLED': {
      const {data} = action.payload
      state.data = data.result
      state.pageInfo = data.pageinfo
      state.isLoading = false
      return {...state}
    }
    case 'GET_VEHICLES_REJECTED': {
      state.isLoading = false
      state.isError = true
      return {...state}
    }
    case 'GET_VEHICLES_NEXT_PENDING':{
      state.isLoading =true
      return {...state}
    }
    case 'GET_VEHICLES_NEXT_FULFILLED': {
      const {data} = action.payload
      state.data = [...state.data, ...data.result]
      state.pageInfo = data.pageinfo
      state.isLoading = false
      return {...state}
    }
    case 'GET_VEHICLES_NEXT_REJECTED': {
      state.isLoading = false
      state.isError = true
      return {...state}
    }
    case 'ADD_VEHICLE_PENDING':{
      state.error = false
      state.isLoading = true
      state.message = ''
      return {...state}
    }
    case 'ADD_VEHICLE_FULFILLED':{
      const {data} = action.payload
      state.isLoading = false
      state.message = data.message
      return {...state}
    }
    case 'ADD_VEHICLE_REJECTED': {
      const {data} = action.payload.response
      state.isLoading = false
      state.error = true
      state.errorMsg = data.message
      return {...state}
    }
    default: {
      return {...state}
    }
  }
}

export default vehicles