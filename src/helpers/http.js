import axios from "axios";

const {REACT_APP_BACKEND_HOST} = process.env

const http = (token, useUpload)=> {
  const headers = {}
  if(token){
    headers["Authorization"] = `Bearer ${token}`
  }
  if (useUpload) {
    headers['Content-Type'] = 'multipart/form-data'
  }
  return axios.create({
    baseURL: REACT_APP_BACKEND_HOST,
    headers
  })
}

export default http