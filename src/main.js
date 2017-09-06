import Vue from 'vue'
import App from './App.vue'
import Alerter from './lib/index.js'

Vue.use(Alerter)

new Vue({
  el: '#app',
  render: h => h(App)
})
