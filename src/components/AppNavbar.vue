<template>
  <Menubar class="py-0 px-32 w-full flex align-center justify-center" :model="items">
    <template #start>
      <router-link to="/">
        <img src="\src\assets\images\logo scris doara.svg" alt="Icon" class="h-12" />
      </router-link>
    </template>
    <template #end>
      <div class="flex align-center justify-center gap-3">
        <router-link to="/favorite">
          <span class="pi pi-heart text-xl"></span>
        </router-link>
        <router-link to="/cos">
          <span class="pi pi-shopping-bag text-xl"></span>
        </router-link>
        <router-link to="/login">
          <span class="pi pi-user"></span>
        </router-link>
      </div>
    </template>
  </Menubar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { createNavbarItems } from '@/data/NavbarItems'

const items = ref(createNavbarItems())
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
