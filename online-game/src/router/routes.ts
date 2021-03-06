import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('pages/HomePage.vue')
      },
      {
        path: 'boss-fight',
        name: 'BossFight',
        component: () => import('pages/BossFightPage.vue')
      },
      {
        path: 'defense-game',
        name: 'DefenseGame',
        component: () => import('pages/DefenseGamePage.vue')
      },
      {
        path: 'statistics',
        name: 'Statistics',
        component: () => import('pages/StatisticsPage.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('pages/LoginPage.vue'),
        meta: { requiresLogout: true }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
