<script setup>
import { ref, computed } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

import Button from 'primevue/button'

import AppInput from '../components/AppInput.vue'
import AppMessage from '../components/AppMessage.vue'

const store = useAuthStore()
const router = useRouter()

const username = ref()
const password = ref()

const disabled = computed(() => {
  return !username.value || !password.value || store.message
})

const register = async () => {
  await store.register(username.value, password.value)
}

const toggleForm = () => {
  store.message = null
  router.push('/login')
}
</script>

<template>
  <h2>Registration</h2>
  <AppMessage v-if="store.message" :severity="store.message.type" :text="store.message.text" />
  <form class="flex flex-column gap-3">
    <AppInput placeholder="Username" icon="user" v-model="username" @input="store.message = null" />
    <AppInput
      type="password"
      placeholder="Password"
      icon="at"
      v-model="password"
      @input="store.message = null"
    />
    <div class="flex flex-column gap-3">
      <Button label="Register" :disabled="disabled" @click="register" />
      <div class="flex align-items-center">
        Already have an account?
        <Button label="Login" link @click="toggleForm" />
      </div>
    </div>
  </form>
</template>
