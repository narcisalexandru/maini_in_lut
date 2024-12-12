<template>
  <div class="flex w-full items-center justify-center h-screen">
    <div class="container w-2/4 py-24 bg-custom flex flex-row rounded-none shadow-xl">
      <div class="flex w-1/2 gap-4 justify-center items-center flex-col flex-wrap">
        <InputText name="username" placeholder="Username" type="text" v-model="value"></InputText>
        <Password name="password" placeholder="Password" v-model="valuePass" :feedback="false" />
        <Button class="border-none" icon="pi pi-user" label="Login"></Button>
      </div>
      <div>
        <Divider layout="vertical"> OR </Divider>
      </div>
      <div class="flex w-1/2 justify-center items-center">
        <Button class="border-none" icon="pi pi-user-plus" label="Sign up"></Button>
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
  --p-inputtext-hover-border-color: grey;
  --p-inputtext-focus-border-color: grey;
  --p-inputtext-focus-ring-color: #546a50;
  --p-form-field-focus-ring-shadow: 1px 2px 15px -5px #546a50;
}
.p-divider-content {
  z-index: 1;
  background-color: white;
  color: #546a50;
}

.p-button {
  background-color: #546a50;
}

.p-divider-vertical:before {
  position: absolute;
  display: block;
  inset-block-start: 0;
  inset-inline-start: 50%;
  height: 100%;
  content: '';
  border-inline-start: 1px solid #546a50;
}

.bg-custom {
  background-color: white;
}
</style>
