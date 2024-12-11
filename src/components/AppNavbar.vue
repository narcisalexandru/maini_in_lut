<template>
  <div>
    <Menubar class="flex rounded-none lg:justify-center bg-custom-green" :model="items" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { createNavbarItems } from '@/data/NavbarItems'

const items = ref(createNavbarItems())
</script>

<style>
:root {
  --p-menubar-color: #546a50;
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
  --p-menubar-item-icon-active-color: #546a50;
  --p-menubar-submenu-background: #546a50;
  --p-menubar-background: #546a50;
}
</style>
