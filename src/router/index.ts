import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'hometown',
    component: HomeView
  },
  {
    path: '/home',
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
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
