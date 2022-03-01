import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AidDetail from '@/views/AidDetail.vue'
import VideoPage from '@/views/VideoPage.vue'
import FondsCollectivites from '@/views/FondsCollectivites.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
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
      component: VideoPage,
      meta: {
        breadcrumbs: [
          { name: 'Accueil', url: 'https://www.transformation.gouv.fr' },
          { name: 'France Relance', url: '/' },
          { name: 'Le mot d\'Amélie de Montchalin'},
        ]
      },
    },
    {
      path: '/fonds-collectivites',
      name: 'FondsCollectivites',
      component: FondsCollectivites,
      meta: {
        breadcrumbs: [
          { name: 'Accueil', url: 'https://www.transformation.gouv.fr' },
          { name: 'France Relance', url: '/' },
          { name: 'Le fond pour les collectivités'},
        ]
      },
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
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
