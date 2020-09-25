import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import AidDetail from '@/views/AidDetail.vue'
import Video from '@/views/Video.vue'
import Search from '@/views/Search.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        breadcrumbs: [
          { name: 'France Relance' },
        ]
      }
    },
    {
      path: '/le-mot-d-amelie-de-montchalin',
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
      path: '/recherche',
      name: 'search',
      component: Search,
      meta: {
        breadcrumbs: [
          { name: 'France Relance', url: '/' },
          { name: 'Recherche'},
        ]
      }
    },
    {
      path: '/:slug',
      name: 'aid_detail',
      component: AidDetail,
      meta: {
        breadcrumbs: [
          { name: 'France Relance', url: '/' },
        ]
      }
    },
  ]
})
