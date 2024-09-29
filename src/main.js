import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createWebHistory, createRouter } from 'vue-router'
import { createPinia } from 'pinia';

import App from './App.vue'
import './assets/main.css'

import HomePage from './Pages/HomePage.vue'
import FavoritePage from './Pages/FavoritePage.vue'
import Purchase from './Pages/Purchase.vue'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


const routes = [
  { path: '/', component: HomePage },
  { path: '/favorites', component: FavoritePage },
  { path: '/purchase', component: Purchase },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(autoAnimatePlugin)
app.use(router)
app.use(VueSweetalert2);
app.use(createPinia());
app.mount('#app')
