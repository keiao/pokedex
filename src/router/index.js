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
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('../modules/characters/favorites.vue')
  },
  {
    path: '/pokePin',
    name: 'pokePin',
    component: () => import('../modules/characters/pokePin.vue')
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