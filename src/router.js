import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import AidDetail from '@/views/AidDetail.vue'
import Video from '@/views/Video.vue'
import Search from '@/views/Search.vue'
import Bientot from '@/views/Bientot.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: process.env.VUE_APP_PATH_TO_HOME || '/',
      name: 'home',
      component: Home,
      meta: {
        breadcrumbs: [
          { name: 'Accueil', url: 'https://www.transformation.gouv.fr' },
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
          { name: 'Accueil', url: 'https://www.transformation.gouv.fr' },
          { name: 'France Relance', url: '/' },
          { name: 'Le mot d\'Amélie de Montchalin'},
        ]
      },
    },
    {
      path: process.env.VUE_APP_PATH_TO_SOON || '/bientot',
      name: 'Bientot',
      component: Bientot,
      meta: {
        breadcrumbs: [
          { name: 'Accueil', url: 'https://www.transformation.gouv.fr' },
          { name: 'France Relance', url: '/' },
          { name: 'Bientôt'},
        ]
      },
    },
    {
      path: '/recherche',
      name: 'search',
      component: Search,
      meta: {
        breadcrumbs: [
          { name: 'Accueil', url: 'https://www.transformation.gouv.fr' },
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
          { name: 'Accueil', url: 'https://www.transformation.gouv.fr' },
          { name: 'France Relance', url: '/' },
          { name: 'Détail du financement' },
        ]
      }
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
