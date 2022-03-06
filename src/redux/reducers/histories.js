const initialState = {
  data : [],
  isLoading: false,
  error: false,
  errorMsg: '',
}

const histories = (state=initialState, action) =>{
  switch(action.type) {
    case 'GET_HISTORIES_PENDING': {
      state.isLoading = true
      state.error = false
      return {...state}
    }
    case 'GET_HISTORIES_FULFILLED': {
      const {data} = action.payload
      state.isLoading = false
      state.error = false
      state.data = data.result
      return {...state}
    }
    case 'GET_HISTORIES_REJECTED': {
      state.isLoading = false
      state.error = true
      return {...state}
    }
    default: {
      return {...state}
    }
  }
}

export default histories