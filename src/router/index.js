import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/css/all.css'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/history',
    name: 'History',

    component: () => import( '../views/History.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
