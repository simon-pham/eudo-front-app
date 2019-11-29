import Vue from 'vue'
import App from './App.vue'
import eudoFront from './components/eudo-front.js'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(eudoFront);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
