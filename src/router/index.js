import { createRouter, createWebHistory } from 'vue-router'
// import login from '../modules/login/index.vue'
import home from '../modules/pages/index.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../modules/pages/index.vue')
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('../modules/pages/favorites.vue')
  },
  {
    path: '/generations',
    name: 'generations',
    component: () => import('../modules/pages/generations.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../modules/pages/profile.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router