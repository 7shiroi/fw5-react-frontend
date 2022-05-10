const initialState = {
  token: '',
  redirect_url: '',
  isLoading: false,
  isError: false,
  errorMsg: '',
  message: ''
}

const payment = (state=initialState, action) => {
  switch(action.type){
    case 'PROCESS_PAYMENT_PENDING':{
      state.isLoading = true
      state.isError = false
      return {...state}
    }
    case 'PROCESS_PAYMENT_FULFILLED': {
      const {data} = action.payload
      state.token = data.result.token
      state.redirect_url = data.result.redirect_url
      state.isLoading = false
      return {...state}
    }
    case 'PROCESS_PAYMENT_REJECTED': {
      state.isLoading = false
      state.isError = true
      return {...state}
    }
    case 'PAYMENT_SUCCESS_PENDING':{
      state.isLoading = true
      state.isError = false
      return {...state}
    }
    case 'PAYMENT_SUCCESS_FULFILLED': {
      state.message = 'Payment success!'
      state.isLoading = false
      return {...state}
    }
    case 'PAYMENT_SUCCESS_REJECTED': {
      state.isLoading = false
      state.isError = true
      return {...state}
    }
    case 'PAYMENT_FAILED': {
      state.isError = true
      state.errorMsg = 'Something wrong when transaction made! Please try again'
      return {...state}
    }
    case 'CLEAR_GATEWAY': {
      return {...initialState}
    }
    default: {
      return {...state}
    }
  }
}

export default payment