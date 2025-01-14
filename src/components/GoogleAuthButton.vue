<template>
  <div class="flex w-full items-center justify-start mt-8 h-screen flex-col">
    <router-link to="/">
      <img src="\src\assets\images\logo scris doar.svg" alt="Icon" class="h-24" />
    </router-link>
    <div
      class="h-auto w-1/4 bg-white flex flex-col items-center justify-center p-8 gap-6 shadow-xl"
    >
      <span class="text-3xl text-gray-500 text-center">Salut !</span>
      <span class="text-xl text-gray-500 text-center"
        >Autentifică-te fără parolă folosind contul google</span
      >
      <GoogleSignInButton @success="handleLoginSuccess" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { GoogleSignInButton, type CredentialResponse } from 'vue3-google-signin'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/authStore'

const router = useRouter()
const authStore = useAuthStore()

const handleLoginSuccess = async (response: CredentialResponse) => {
  const { credential } = response

  try {
    const res = await fetch('http://localhost:5000/api/auth/google', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idToken: credential }),
    })

    if (!res.ok) {
      throw new Error('Failed to authenticate')
    }

    const data = await res.json()

    authStore.login(data.token)

    router.push(`/profile/${data.name}`)
  } catch (error) {
    console.error('Login error:', error)
  }
}
</script>
