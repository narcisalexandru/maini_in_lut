import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IUser } from '@/interfaces/IUser'
import { authService } from '@/services/authService'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<IUser | null>(authService.getUser() || null)

  const login = (token: string) => {
    authService.setToken(token)
    const fetchedUser = authService.getUser()
    if (fetchedUser) {
      authService.setUser(fetchedUser)
      user.value = fetchedUser
    } else {
      console.error('No user data found after login')
    }
  }

  const logout = () => {
    authService.clearSession()
    user.value = null
  }

  return { user, login, logout }
})
