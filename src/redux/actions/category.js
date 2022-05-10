import http from "../../helpers/http"

export const getCategory = () => {
  return {
    type: 'GET_CATEGORY',
    payload: http().get('category')
  }
}