<template>
  <div>
    <p v-if="user">Nume: {{ user.name }}</p>
    <p v-if="user">Email: {{ user.email }}</p>
    <p v-else>Nu ești logat.</p>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores/authStore'

const userStore = useAuthStore()
const { user } = storeToRefs(userStore)
</script>
