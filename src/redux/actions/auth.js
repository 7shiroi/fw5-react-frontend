import http from '../../helpers/http'

export const login = (username, password) => {
  const params = new URLSearchParams()
  params.append('username', username)
  params.append('password', password)
  return {
    type: 'LOGIN',
    payload: http().post('auth/login', params)
  }
}

export const register = (data) => {
  const params = new URLSearchParams()
  params.append('name', data.name)
  params.append('username', data.username)
  params.append('email', data.email)
  params.append('password', data.password)
  params.append('confirmPassword', data.confirmPassword)
  return {
    type: 'REGISTER',
    payload: http().post('auth/register', params)
  }
}

export const verifyUser = (token, otp = null) => {
  const params = new URLSearchParams()
  if (otp){
    params.append('code', otp)
  }
  return {
    type: 'VERIFY_USER',
    payload: http(token).post('auth/verifyUser', params)
  }
}

export const getProfile = (token)=> {
  return({
    type: 'GET_PROFILE',
    payload: http(token).get('profile')
  })
}