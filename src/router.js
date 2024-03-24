import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from './stores/auth'
import Home from './pages/index.vue'
import Login from './pages/login.vue'
import Register from './pages/register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        auth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        auth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        auth: false
      }
    }
  ]
})

router.beforeEach((to) => {
  const store = useAuthStore()

  if (to.meta.auth && !store.isAuth) return '/login'
  else if (!to.meta.auth && store.isAuth) return '/'
})

export default router
