import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import appSnow from '@/components/pages/appSnow/appSnow.vue'
import app404 from '@/components/pages/app404/app404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/snow',
      name: 'appSnow',
      component: appSnow
    }, {
      path: '*',
      name: 'app404',
      component: app404
    },
  ]
})
