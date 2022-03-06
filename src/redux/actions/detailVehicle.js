import http from "../../helpers/http"

export const getDetailVehicle = (id) => {
  return {
    type: 'GET_DETAIL_VEHICLE',
    payload: http().get(`vehicle/${id}`)
  }
}