export const API_ENDPOINT = 'http://localhost:3001/api'

export const ORDERS = 'orders'
export const ITEM = 'item'
export const ITEMS = 'items'

export const resources = {
  [ORDERS]: () => `${API_ENDPOINT}/${ORDERS}`,
  [ITEMS]: () => `${API_ENDPOINT}/${ITEMS}`,
  [ITEM]: (id) => `${API_ENDPOINT}/${ITEMS}/${id}`
}
