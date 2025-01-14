import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores/authStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthView.vue'),
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore()
        if (authStore.user) {
          next(`/profile/${authStore.user.name}`)
        } else {
          next()
        }
      },
    },
    {
      path: '/profile/:name',
      name: 'profile',
      component: () => import('../views/UserProfileView.vue'),
      props: true,
    },
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.name === 'auth' && authStore.user) {
    next(`/profile/${authStore.user.name}`)
  } else {
    next()
  }
})

export default router
