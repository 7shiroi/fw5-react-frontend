import http from '../../helpers/http'

export const getHistories = (token, lastCreated=7) => {
  const params = new URLSearchParams()
  params.append('lastCreated', lastCreated)
  return ({
    type: "GET_HISTORIES",
    payload: http(token).get(`history?${params}`,)
  })
}