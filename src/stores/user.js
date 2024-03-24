import { defineStore } from 'pinia'
import { ref } from 'vue'
import { sendRequest, getState } from '../storage'
import { setMessage } from '../functions'

export const useUserStore = defineStore('user', () => {
  const message = ref(null)
  const userInfo = ref(null)

  const getUserInfo = async () => {
    const token = getState('access_token')
    try {
      const response = await sendRequest('get', '/about/', token)
      userInfo.value = response?.data ? response.data.data : null
    } catch (e) {
      e.response.status === 400
        ? (message.value = setMessage('warn', e.response.data.error))
        : console.log('GET USER INFO', e)
    }
  }
  return { message, userInfo, getUserInfo }
})
