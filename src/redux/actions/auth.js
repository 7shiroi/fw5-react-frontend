import http from '../../helpers/http'
import qs from 'qs'

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

export const resetPassword = (otp, email, password, confirmPassword) => {
  const params = new URLSearchParams()
  params.append('code', otp)
  params.append('email', email)
  params.append('password', password)
  params.append('confirmPassword', confirmPassword)
  return {
    type: 'RESET_PASSWORD',
    payload: http().post('auth/forgotPassword', params)
  }
}

export const requestResetPassword = (email) => {
  const params = new URLSearchParams()
  params.append('email', email)
  return {
    type: 'REQUEST_RESET_PASSWORD',
    payload: http().post('auth/forgotPassword', params),
    extra: email,
  }
}

export const getProfile = (token)=> {
  return({
    type: 'GET_PROFILE',
    payload: http(token).get('profile')
  })
}

export const editProfile = (token, data)=> {
  const params = new FormData()
  for (const key in data) {
    params.append(key, data[key]);
  }
  if (!data.picture){
    params.delete('picture')
  }

  return({
    type: 'EDIT_PROFILE',
    payload: http(token, true).patch('profile', params)
  })
}