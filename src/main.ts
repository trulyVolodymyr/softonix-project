import { createApp } from 'vue'
import App from '@/App.vue'

import { router } from '@/router'
import { store } from '@/store/create-store'

import VueGoogleMaps from '@fawmi/vue-google-maps'

import {
  PortalPlugin,
  I18nPlugin,
  VueGlobalPropertiesPlugin
} from '@/plugins'

import '@/assets/styles/main.scss'

const app = createApp(App)

app
  .use(store)
  .use(router)
  .use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyCgQLrGCbhadhxQ4SvcWZY911Do3H1mZRs'
    }
  })
  .use(I18nPlugin)
  .use(PortalPlugin)
  .use(VueGlobalPropertiesPlugin)

router.isReady().then(() => {
  app.mount('#app')
})

export {
  app
}
