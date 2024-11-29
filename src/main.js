import { createApp } from 'vue'
import router from './router/router'
import { createPinia } from 'pinia'

const pinia = createPinia()
import App from './App.vue'


createApp(App).use(pinia).use(router).mount('#app')
