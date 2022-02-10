import Vue from 'vue'
import Router from 'vue-router'
const Main = () => import('@/components/Main')
const appSnow = () => import('@/components/pages/appSnow/appSnow.vue')
const appTest = () => import('@/components/pages/appTest/appTest.vue')
const app404 = () => import('@/components/pages/app404/app404')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/app/snow',
      name: 'appSnow',
      component: appSnow,
    },
    {
      path: '/app/test',
      name: 'appTest',
      component: appTest,
    },
    {
      path: '*',
      name: 'app404',
      component: app404,
    },
  ]
})
