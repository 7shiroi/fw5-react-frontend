import http from "../../helpers/http"

export const processPayment = (token, idHistory) => {
  const data = new URLSearchParams()
  data.append('idHistory', idHistory)
  return {
    type: 'PROCESS_PAYMENT',
    payload: http(token).post('payment', data)
  }
}

export const paymentFailed = () => {
  return {
    type: 'PAYMENT_FAILED',
  }
}

export const paymentSuccess = (token, idHistory) => {
  const data = new URLSearchParams()
  data.append('idHistory', idHistory)
  return {
    type: 'PAYMENT_SUCCESS',
    payload: http(token).post('payment/success', data)
  }
}