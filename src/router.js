import Vue from 'vue'
import Router from 'vue-router'
import FranceRelance from '@/views/francerelance.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FranceRelance',
      component: FranceRelance,
    },
  ]
})
