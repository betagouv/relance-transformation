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
      meta: {
        breadcrumbs: [
          { name: 'France Relance' },
        ]
      }
    },
    {
      path: '/Video',
      name: 'video',
      component: Video,
      meta: {
        breadcrumbs: [
          { name: 'France Relance', url: '/' },
          { name: 'Le mot d\'Amélie de Montchalin'},
        ]
      }
    },
    {
      path: '/Recherche',
      name: 'Recherche',
      component: Recherche,
      meta: {
        breadcrumbs: [
          { name: 'France Relance', url: '/' },
          { name: 'Recherche'},
        ]
      }
    },
    {
      path: '/Aides/:slug',
      name: 'Aides',
      component: Aides,
      meta: {
        breadcrumbs: [
          { name: 'France Relance', url: '/' },
          { name: 'Mon financement'},
        ]
      }
    },
  ]
})
