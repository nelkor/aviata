import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { MainPage } from '@/main-page'

const routes: RouteRecordRaw[] = [
  {
    name: 'root',
    path: '/',
    component: MainPage,
  },

  // unfamiliar path
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'root' },
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
