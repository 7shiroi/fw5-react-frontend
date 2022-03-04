const initialState = {
  token: null,
  userData: {},
  isLoading: false,
  error: false,
  errorMsg: ''
}

const auth = (state=initialState, action) => {
  switch(action.type){
    case 'LOGIN_PENDING': {
      state.error = false
      state.isLoading = true
      return {...state}
    }
    case 'LOGIN_FULFILLED': {
      const {data} = action.payload
      state.isLoading = false
      state.token = data.result
      window.localStorage.setItem('token', state.token)
      return {...state}
    }
    case 'LOGIN_REJECTED': {
      const {data} = action.payload.response
      state.isLoading = false
      state.error = true
      state.errorMsg = data.message
      return {...state}
    }
    case 'LOGOUT': {
      state.token = null
      window.localStorage.removeItem('token')
      return {...state}
    }
    default: {
      return {...state}
    }
  }
}

export default auth