<script setup>
import { ref, computed } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

import AppInput from '../components/AppInput.vue'
import AppMessage from '../components/AppMessage.vue'
import Button from 'primevue/button'

const store = useAuthStore()
const router = useRouter()

const username = ref()
const password = ref()

const disabled = computed(() => {
  return !username.value || !password.value || store.message
})

const login = async () => {
  await store.login(username.value, password.value).then(() => {
    if (store.isAuth) router.push('/')
  })
}

const toggleForm = () => {
  store.message = null
  router.push('/register')
}
</script>

<template>
  <h2>Login</h2>
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
      <Button label="Login" :disabled="disabled" @click="login" />
      <div class="flex align-items-center">
        Didn't have an account?
        <Button label="Sign Up" link @click="toggleForm" />
      </div>
    </div>
  </form>
</template>
