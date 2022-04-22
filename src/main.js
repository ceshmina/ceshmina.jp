import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueScrollTo from 'vue-scrollto'
import VTooltip from 'v-tooltip'


createApp(App)
  .use(router)
  .use(VueScrollTo)
  .use(VTooltip)
  .mount('#app')
