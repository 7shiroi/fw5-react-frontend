import {default as axios} from 'axios'
import http from '../../helpers/http'
const {REACT_APP_BACKEND_HOST: backendHost} = process.env

export const getVehicles = (category=null, searchQuery=null, limit = process.env.REACT_APP_LIMIT_ITEMS) => {
  let url = ''
  if (category){
    switch(category){
      case 'popular': {
        url = `${backendHost}vehicle/popular?limit=${limit}`
        break
      }
      case 'cars': {
        url = `${backendHost}vehicle/category/1?limit=${limit}`
        break
      }
      case 'motorbikes': {
        url = `${backendHost}vehicle/category/3?limit=${limit}`
        break
      }
      case 'bikes': {
        url = `${backendHost}vehicle/category/2?limit=${limit}`
        break
      }
      default: {
        // navigate to page not found
      }
    }
  } else {
    url = `${backendHost}vehicle?limit=${limit}`
  }

  if (searchQuery) {
    url += searchQuery
  }
  return {
    type: 'GET_VEHICLES',
    payload: axios.get(url)
  }
}
  
export const getVehiclesNext = (url) => {
  return {
    type: 'GET_VEHICLES_NEXT',
    payload: axios.get(url)
  }
}
