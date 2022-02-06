import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import appSnow from '@/components/pages/appSnow/appSnow.vue'

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
    }
  ]
})
