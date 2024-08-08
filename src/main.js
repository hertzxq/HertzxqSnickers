import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createWebHistory, createRouter } from 'vue-router'

import App from './App.vue'
import './assets/main.css'

import HomePage from './Pages/HomePage.vue'
import FavoritePage from './Pages/FavoritePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/favorites', component: FavoritePage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(autoAnimatePlugin)
app.use(router)
app.mount('#app')
