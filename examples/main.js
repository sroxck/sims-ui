import Vue from 'vue'
import App from './App.vue'
import Sui from '../packages'
import Message from './components/message.vue'
// import message from './components/index'
// Vue.use(message)
import './assets/icon/iconfont.css'
Vue.config.productionTip = false
// Vue.component('message',Message)
Vue.use(Sui)
new Vue({
  render: h => h(App),
}).$mount('#app')
