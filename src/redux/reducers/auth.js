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
    case 'LOGOUT': {
      state.token = null
      state.userData = {}
      window.localStorage.removeItem('token')
      return {...state}
    }
    default: {
      return {...state}
    }
  }
}

export default auth