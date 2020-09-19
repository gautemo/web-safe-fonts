import { createRouter, createWebHistory } from 'vue-router'
import About from './views/About.vue'
import AllFonts from './views/AllFonts.vue'

const routes = [
  {
    path: '/',
    component: AllFonts
  },
  {
    path: '/about',
    component: About
  },
  // {
  //   path: '/:font',
  //   component: Font
  // },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})