//in main.js
import 'primevue/resources/themes/aura-light-indigo/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia).use(router).use(PrimeVue).mount('#app')
