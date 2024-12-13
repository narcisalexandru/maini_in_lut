import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Lara from '@primevue/themes/lara'
import { createPinia } from 'pinia'
import GoogleSignInPlugin from 'vue3-google-signin'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(GoogleSignInPlugin, {
  clientId: '1042525062763-2vddq72n7qiel28qbg55a9lf7jmgs5ce.apps.googleusercontent.com',
})

app.use(PrimeVue, {
  theme: {
    preset: Lara,
    options: {
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities',
      },
    },
  },
})

app.use(createPinia())
app.use(router)

app.mount('#app')
