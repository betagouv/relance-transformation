import Vue from 'vue'
import Router from 'vue-router'
import FranceRelance from '@/views/francerelance.vue'
import Aides from '@/views/Aides.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FranceRelance',
      component: FranceRelance,
    },
    // {
    //   path: '/Aides/:id',
    //   name: 'Aides',
    //   component: Aides,
    // },
    {
      path: '/Aides/:name/:id',
      name: 'Aides',
      component: Aides,
    },
  ]
})
