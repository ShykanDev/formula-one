import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/AboutView.vue')
  },
  {
    path: '/drivers',
    name: 'drivers',
    component: () => import(/* webpackChunkName: "drivers" */ '../views/DriversView.vue')
  },
  {
    path: '/teams',
    name: 'teams',
    component: () => import(/* webpackChunkName: "teams" */ '../views/TeamsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
