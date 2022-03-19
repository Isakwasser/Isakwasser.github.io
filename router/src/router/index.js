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
const appGames_2048 = () => import('@/components/pages/appGames/app2048/app2048.vue')
const appPlace = () => import('@/components/pages/appPlace/appPlace.vue')
const appNews = () => import('@/components/pages/appNews/appNews.vue')
const appDigital = () => import('@/components/pages/appDigital/appDigital.vue')
const appDigital_init = () => import('@/components/pages/appDigital/appInit/appInit.vue')
const appDigital_s04 = () => import('@/components/pages/appDigital/appS04/appS04.vue')
const appDigital_s05 = () => import('@/components/pages/appDigital/appS05/appS05.vue')
const appDigital_s06 = () => import('@/components/pages/appDigital/appS06/appS06.vue')
const appDigital_s07 = () => import('@/components/pages/appDigital/appS07/appS07.vue')
const appDigital_sTest = () => import('@/components/pages/appDigital/appSTest/appSTest.vue')

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
        {
          path: '2048',
          name: 'appGames_2048',
          component: appGames_2048,
        },
      ]
    },
    {
      path: '/app/place',
      name: 'appPlace',
      component: appPlace,
    },
    {
      path: '/app/news',
      name: 'appNews',
      component: appNews,
    },
    {
      path: '/digital',
      component: appDigital,
      children: [
        {
          path: '',
          name: 'appDigital_init',
          component: appDigital_init,
        },
        {
          path: 's-04',
          name: 'appDigital_s04',
          component: appDigital_s04,
        },
        {
          path: 's-05',
          name: 'appDigital_s05',
          component: appDigital_s05,
        },
        {
          path: 's-06',
          name: 'appDigital_s06',
          component: appOnProduction,
        },
        {
          path: 's-07',
          name: 'appDigital_s07',
          component: appDigital_s07,
        },
        {
          path: 's-test',
          name: 'appDigital_sTest',
          component: appDigital_sTest,
        },
      ]
    },
    {
      path: '*',
      name: 'app404',
      component: app404,
    },
  ]
})
