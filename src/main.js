import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import i18n from '@/lang'

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  i18n,
  store,
  render: h => h(App),
}).$mount('#app')
