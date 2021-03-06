import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/less/style.less'

import Vue from 'vue'
import ElementUI from 'element-ui'
import VueClipboard from 'vue-clipboard2'
import VueLazyload from 'vue-lazyload'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'

Vue.config.productionTip = false

Vue.use(ElementUI)

VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)

Vue.use(VueLazyload, {
  dispatchEvent: true
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
