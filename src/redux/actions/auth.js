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