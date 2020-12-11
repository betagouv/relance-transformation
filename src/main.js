import Vue from 'vue'
import App from '@/App.vue'
import VueMeta from 'vue-meta'
import VueMatomo from 'vue-matomo'
import smartTag from 'vue-atinternet-smarttag'

import store from '@/store'
import router from '@/router'

import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";
import { Integrations } from "@sentry/tracing";

Vue.config.productionTip = false

Vue.use(VueMeta)
Vue.use(smartTag)



if (process.env.VUE_APP_MATOMO_SITE_ID) {
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


if (process.env.VUE_APP_SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.VUE_APP_SENTRY_DSN,
    integrations: [
      new Integrations.BrowserTracing(),
      new VueIntegration({
        Vue,
        tracing: true,
        attachProps: true,
        tracingOptions: {
          trackComponents: true,
        },
      }),
    ],
    tracesSampleRate: 0.1, // percent of transaction that will be transmited.
  });
}
