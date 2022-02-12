import Vue from 'vue'
import Router from 'vue-router'
const Main = () => import('@/components/Main')
const appSnow = () => import('@/components/pages/appSnow/appSnow.vue')
const appTest = () => import('@/components/pages/appTest/appTest.vue')
const appBuffer = () => import('@/components/pages/appBuffer/appBuffer.vue')
const appFunnyImage = () => import('@/components/pages/appFunnyImage/appFunnyImage.vue')
const app404 = () => import('@/components/pages/app404/app404')
const appOnProduction = () => import('@/components/pages/appOnProduction/appOnProduction')

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
      path: '/app/buffer',
      name: 'appBuffer',
      component: appOnProduction,
    },
    {
      path: '/app/funny-image',
      name: 'appFunnyImage',
      component: appFunnyImage,
    },
    {
      path: '*',
      name: 'app404',
      component: app404,
    },
  ]
})
