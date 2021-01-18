import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './lib/autoPx'
import { Toast } from 'vant';
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false
Vue.use(VueClipboard)
Vue.use(Toast);

router.afterEach(to => {
  window.scrollTo(0, 0)
  document.title = to.meta.title
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
