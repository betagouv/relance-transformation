import Vue from 'vue'
import Router from 'vue-router'
import FranceRelance from '@/views/francerelance.vue'
import Aides from '@/views/Aides.vue'
import Video from '@/views/Video.vue'
import Recherche from '@/views/Recherche.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FranceRelance',
      component: FranceRelance,
    },
    {
      path: '/Video',
      name: 'video',
      component: Video,
    },
    {
      path: '/Recherche',
      name: 'Recherche',
      component: Recherche,
    },
    {
      path: '/Aides/:slug',
      name: 'Aides',
      component: Aides,
    },
  ]
})
