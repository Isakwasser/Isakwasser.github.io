import Vue from 'vue'
import Router from 'vue-router'
const Init = () => import('@/components/pages/appInit/appInit')
const Main = () => import('@/components/Main')
const appSnow = () => import('@/components/pages/appSnow/appSnow.vue')
const appTest = () => import('@/components/pages/appTest/appTest.vue')
const appBuffer = () => import('@/components/pages/appBuffer/appBuffer.vue')
const appFunnyImage = () => import('@/components/pages/appFunnyImage/appFunnyImage.vue')
const app404 = () => import('@/components/pages/app404/app404')
const appOnProduction = () => import('@/components/pages/appOnProduction/appOnProduction')
const appGames = () => import('@/components/pages/appGames/appGames.vue')
const appGames_init = () => import('@/components/pages/appGames/appInit/appInit.vue')
const appGames_shooting = () => import('@/components/pages/appGames/appShooting/appShooting.vue')
const appGames_ticTacToe = () => import('@/components/pages/appGames/appTicTacToe/appTicTacToe.vue')
const appPlace = () => import('@/components/pages/appPlace/appPlace.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Init',
      component: Init,
    },
    {
      path: '/main',
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
      path: '/games',
      name: 'appGames',
      component: appGames,
      children: [
        {
          path: '',
          name: 'appGames_init',
          component: appGames_init,
        },
        {
          path: 'shooting',
          name: 'appGames_shooting',
          component: appGames_shooting,
        },
        {
          path: 'tic-tac-toe',
          name: 'appGames_ticTacToe',
          component: appGames_ticTacToe,
        },
      ]
    },
    {
      path: '/app/place',
      name: 'appPlace',
      component: appPlace,
    },
    {
      path: '*',
      name: 'app404',
      component: app404,
    },
  ]
})
