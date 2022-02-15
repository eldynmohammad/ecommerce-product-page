import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import '@/assets/main.css'
import { currency } from './methods'

createApp(App).use(store).mixin({methods: { currency },}).mount('#app')
