import Vue from 'vue'
import App from '@/App.vue'
import VueMeta from 'vue-meta'
import VueMatomo from 'vue-matomo'

import store from '@/store'
import router from '@/router'

Vue.config.productionTip = false

Vue.use(VueMeta)

if (process.env.VUE_APP_USE_ANALYTICS) {
  Vue.use(VueMatomo, {
    host: 'https://stats.data.gouv.fr',
    siteId: process.env.VUE_APP_MATOMO_SITE_ID,
  });
}

const vue = new Vue({
  router,
  store,
  render: h => h(App)
})

vue.$mount('#app')
