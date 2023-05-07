import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/screenBig',
      name: 'layout',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/screenBig',
      name: 'screenBig',
      component: () => import('@/views/screenBig/index.vue')
    }
  ]
})

export default router
