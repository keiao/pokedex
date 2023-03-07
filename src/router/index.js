import { createRouter, createWebHistory } from 'vue-router'
import login from '../modules/login/index.vue'


const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../modules/characters/index.vue')
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('../modules/characters/favorites.vue')
  },
  {
    path: '/generations',
    name: 'generations',
    component: () => import('../modules/characters/generations.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../modules/characters/profile.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router