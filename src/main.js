import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import 'virtual:windi.css'
import 'prismjs/themes/prism-tomorrow.css'


import fade from './directives/fade'

import en from './locales/en'
import et from './locales/et'

const i18n = reactive({
  locale: 'en',
  messages: { en, et }
})

const app = createApp(App)
app.provide('i18n', i18n)
app.directive('fade', fade)
app.use(router)
app.mount('#app')
