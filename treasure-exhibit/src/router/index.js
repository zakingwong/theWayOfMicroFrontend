import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/exhibit-page'
    },
    {
      path: '/exhibit-page',
      name: 'exhibitPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/exhibit-page/index.vue')
    }
  ]
})

export default router