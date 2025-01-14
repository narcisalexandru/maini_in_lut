<template>
  <Menubar
    class="py-0 lg:px-32 w-full flex align-center rounded-none justify-center"
    :model="items"
  >
    <template #start>
      <router-link to="/">
        <img src="\src\assets\images\logo scris doar.svg" alt="Icon" class="h-12" />
      </router-link>
    </template>
    <template #end>
      <div class="flex align-center justify-center gap-4">
        <router-link to="/favorite">
          <span class="pi pi-heart text-xl"></span>
        </router-link>
        <router-link to="/cos">
          <span class="pi pi-shopping-bag text-xl"></span>
        </router-link>
        <div v-if="user" class="flex items-center gap-2">
          <router-link :to="`/profile/${user.name}`">
            <Avatar v-if="user.picture" :image="user.picture" shape="circle" />
          </router-link>
          <span>{{ user.name }}</span>
        </div>
        <div v-else>
          <router-link to="/auth">
            <span class="pi pi-user"></span>
          </router-link>
        </div>
      </div>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { createNavbarItems } from '@/data/NavbarItems'
import { useAuthStore } from '@/stores/authStore'

const items = ref(createNavbarItems())

const authStore = useAuthStore()
const user = computed(() => authStore.user)
</script>

<style>
:root {
  --p-menubar-color: #ece4d4;
  --p-menubar-gap: 1.5rem;
  --p-menubar-item-focus-background: #ece4d4;
  --p-menubar-item-active-background: #546a50;
  --p-menubar-item-color: #ece4d4;
  --p-menubar-item-icon-color: #ece4d4;
  --p-menubar-item-icon-focus-color: #ece4d4;
  --p-menubar-mobile-button-color: #ece4d4;
  --p-menubar-mobile-button-hover-color: #ece4d4;
  --p-menubar-mobile-button-focus-ring-color: #ece4d4;
  --p-menubar-item-active-color: #546a50;
  --p-menubar-item-focus-color: #546a50;
  --p-menubar-item-icon-active-color: #ece4d4;
  --p-menubar-submenu-background: #546a50;
  --p-menubar-background: #546a50;
}
</style>
