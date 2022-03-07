const initialState = {
  token: null,
  userData: {},
  isLoading: false,
  error: false,
  errorMsg: '',
  message: '',
  email: '',
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
      if (!window.localStorage.getItem('token')){
        window.localStorage.setItem('token', state.token)
      }
      return {...state}
    }
    case 'LOGIN_REJECTED': {
      const {data} = action.payload.response
      state.isLoading = false
      state.error = true
      state.errorMsg = data.message
      return {...state}
    }
    case 'REGISTER_PENDING': {
      state.error = false
      state.isLoading = true
      state.message = ''
      return {...state}
    }
    case 'REGISTER_FULFILLED': {
      const {data} = action.payload
      state.isLoading = false
      state.message = data.message
      return {...state}
    }
    case 'REGISTER_REJECTED': {
      const {data} = action.payload.response
      state.isLoading = false
      state.error = true
      state.errorMsg = data.message || data.error
      return {...state}
    }
    case 'GET_PROFILE_PENDING':{
      state.error = false
      state.isLoading = true
      return {...state}
    }
    case 'GET_PROFILE_FULFILLED':{
      const {data} = action.payload
      state.isLoading = false
      state.userData = data.result      
      return {...state}
    }
    case 'GET_PROFILE_REJECTED': {
      const {data} = action.payload.response
      state.isLoading = false
      state.error = true
      state.errorMsg = data.message
      return {...state}
    }
    case 'VERIFY_USER_PENDING':{
      state.error = false
      state.isLoading = true
      state.message = ''
      return {...state}
    }
    case 'VERIFY_USER_FULFILLED':{
      const {data} = action.payload
      state.isLoading = false
      state.message = data.message      
      return {...state}
    }
    case 'VERIFY_USER_REJECTED': {
      const {data} = action.payload.response
      state.isLoading = false
      state.error = true
      state.errorMsg = data.message
      return {...state}
    }
    case 'REQUEST_RESET_PASSWORD_PENDING':{
      state.error = false
      state.isLoading = true
      state.message = ''
      return {...state}
    }
    case 'REQUEST_RESET_PASSWORD_FULFILLED':{
      const {data} = action.payload
      state.isLoading = false
      state.message = data.message
      return {...state}
    }
    case 'REQUEST_RESET_PASSWORD_REJECTED': {
      const {data} = action.payload.response
      state.isLoading = false
      state.error = true
      state.errorMsg = data.message
      return {...state}
    }
    case 'RESET_PASSWORD_PENDING':{
      state.error = false
      state.isLoading = true
      state.message = ''
      return {...state}
    }
    case 'RESET_PASSWORD_FULFILLED':{
      const {data} = action.payload
      state.isLoading = false
      state.message = data.message
      state.email = ''
      return {...state}
    }
    case 'RESET_PASSWORD_REJECTED': {
      const {data} = action.payload.response
      state.isLoading = false
      state.error = true
      state.errorMsg = data.message
      return {...state}
    }
    case 'SET_EMAIL': {
      state.email = action.payload.email
      return {...state}
    }
    case 'LOGOUT': {
      state.token = null
      state.userData = {}
      state.error = false
      state.message = ''
      state.errorMsg = ''
      window.localStorage.removeItem('token')
      return {...state}
    }
    default: {
      return {...state}
    }
  }
}

export default auth