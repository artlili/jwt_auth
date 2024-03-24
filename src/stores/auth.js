import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { sendRequest, setState, getState } from '../storage'
import { setMessage } from '../functions'

export const useAuthStore = defineStore('auth', () => {
  const message = ref(null)
  const token = ref(null)

  const isAuth = computed(() => token.value || getState('access_token'))

  const login = async (username, password) => {
    try {
      const response = await sendRequest('post', '/login/', { username, password })
      if (response.data.token) {
        token.value = response.data.token
        setState('access_token', token.value)
      }
    } catch (e) {
      e.response.status === 401
        ? (message.value = setMessage('error', e.response.data.error))
        : console.error('LOGIN', e)
    }
  }

  const register = async (username, password) => {
    try {
      const response = await sendRequest('post', '/register/', { username, password })
      message.value = setMessage('success', response.data.message)
    } catch (e) {
      e.response.status === 400
        ? (message.value = setMessage('error', e.response.data.error))
        : console.error('REGISTER', e)
    }
  }
  return { message, isAuth, login, register }
})
