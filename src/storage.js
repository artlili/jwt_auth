import axios from 'axios'
import { API_URL } from './constants'
import { isString } from './validators'

export const api = axios.create({
  baseURL: API_URL
})

export function setState(key, value) {
  localStorage.setItem(key, value)
}
export function getState(key) {
  return localStorage.getItem(key)
}

export async function sendRequest(method, endpoint, params) {
  const availableMethods = ['get', 'post']
  if (isString(method) && availableMethods.includes(method)) {
    if (method === 'get') {
      return await api.get(endpoint, {
        headers: {
          Authorization: 'Bearer ' + params
        }
      })
    }
    if (method === 'post') {
      return await api.post(endpoint, params)
    }
  } else {
    console.error(`${method} method does not exist`)
  }
}
