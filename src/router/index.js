import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: () => import('@/components/layout/index.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/Home.vue')
        },
        {
          path: '/onLineWord',
          name: 'onLineWord',
          component: () => import('@/views/onLineWord/index.vue')
        },
        {
          path: '/onLineWord2',
          name: 'onLineWord2',
          component: () => import('@/views/onLineWord2/index.vue')
        },
        {
          path: '/drag',
          name: 'drag',
          component: () => import('@/views/drag/index.vue')
        },
        {
          path: '/reports',
          name: 'reports',
          component: () => import('@/views/reports/index.vue')
        }
      ]
    },

    {
      path: '/screenBig',
      name: 'screenBig',
      component: () => import('@/views/screenBig/index.vue')
    },
    {
      path: '/screenBig/screenBigSub',
      name: 'screenBigSub',
      component: () => import('@/views/screenBigSub/index.vue')
    },
    {
      path: '/kpi/cross',
      name: 'kpiCross',
      component: () => import('@/views/kpiCross/index.vue')
    }
  ]
})

export default router
