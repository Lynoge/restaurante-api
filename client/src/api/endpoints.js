export const API_ENDPOINT = 'http://localhost:3001/api'

export const ORDERS = 'orders'

export const resources = {
  [ORDERS]: () => `${API_ENDPOINT}/${ORDERS}`
}
