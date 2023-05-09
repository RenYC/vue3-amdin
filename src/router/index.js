import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: defineAsyncComponent(() => import('@/components/layout/index.vue')),
      children: [
        {
          path: '/home',
          name: 'home',
          component: defineAsyncComponent(() => import('@/views/Home.vue'))
        },
        {
          path: '/onLineWord',
          name: 'onLineWord',
          component: defineAsyncComponent(() => import('@/views/onLineWord/index.vue'))
        }
      ]
    },

    {
      path: '/screenBig',
      name: 'screenBig',
      component: defineAsyncComponent(() => import('@/views/screenBig/index.vue'))
    },
    {
      path: '/screenBig/screenBigSub',
      name: 'screenBigSub',
      component: defineAsyncComponent(() => import('@/views/screenBigSub/index.vue'))
    }
  ]
})

export default router
