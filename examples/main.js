import Vue from 'vue'
import App from './App.vue'
import Sui from '../packages'
import './assets/icon/iconfont.css'
Vue.config.productionTip = false
// import message from './components/notify/index.js'
// Vue.use(message)
Vue.use(Sui)
new Vue({
  render: h => h(App),
}).$mount('#app')
