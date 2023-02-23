import { createRouter, createWebHistory } from 'vue-router'
import login from '../modules/login/index.vue'
import home from '../modules/characters/index.vue'


const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
  },
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../modules/characters/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router