import {default as axios} from 'axios'
const {REACT_APP_BACKEND_HOST: backendHost} = process.env

export const login = (username, password) => {
  const loginInfo = {username, password}
  return {
    type: 'LOGIN',
    // payload: axios.post(`${backendHost}auth/login`,{loginInfo})
    payload: axios({
      method: 'post',
      url: `${backendHost}auth/login`,
      data: {loginInfo}})
  }
}