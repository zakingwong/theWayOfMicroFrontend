import { createRouter, createWebHistory } from 'vue-router'
console.log(import.meta.env.BASE_URL,'import.meta.env.BASE_URL')
const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/create-page'
    },
    {
      path: '/create-page',
      name: 'createPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/create-page/index.vue')
    }
  ]
})

export default router
