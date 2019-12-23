import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCompositionApi from '@vue/composition-api'
import { firestorePlugin } from 'vuefire'
import VueRx from 'vue-rx'
import VueKonva from 'vue-konva'

Vue.use(VueCompositionApi)
Vue.use(firestorePlugin)
Vue.use(VueRx)
Vue.use(VueKonva)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
