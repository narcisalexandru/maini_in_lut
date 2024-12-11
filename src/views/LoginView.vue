<template>
  <div class="flex w-full items-center justify-center h-screen">
    <div class="container w-2/4 py-24 bg-custom flex flex-row rounded-md shadow-xl">
      <div class="flex w-1/2 gap-4 justify-center items-center flex-col flex-wrap">
        <InputText name="username" placeholder="Username" type="text" v-model="value"></InputText>
        <Password name="password" placeholder="Password" v-model="valuePass" :feedback="false" />
        <Button icon="pi pi-user" label="Login"></Button>
      </div>
      <div>
        <Divider class="text-red-800" layout="vertical"> OR </Divider>
      </div>
      <div class="flex w-1/2 justify-center items-center">
        <Button icon="pi pi-user-plus" label="Sign up"></Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref(null)
const valuePass = ref(null)
</script>

<style>
:root {
  --p-divider-content-background: transparent;
}
.p-divider-content {
  z-index: 1;
  background-color: #546a50;
  color: #ece4d4;
}

.p-divider-vertical:before {
  position: absolute;
  display: block;
  inset-block-start: 0;
  inset-inline-start: 50%;
  height: 100%;
  content: '';
  border-inline-start: 1px solid #ece4d4;
}

.bg-custom {
  background-color: #546a50;
}
</style>
