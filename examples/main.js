import Vue from 'vue'
import App from './App.vue'

// import Sui from '../packages'
import './assets/icon/iconfont.css'
import ast from 'trans-ast'
console.log(ast.parseAST(`<div id="app">
<p>**{{message.trim()}}**</p>
<p s-text="message"></p>
<!-- 这是注释内容 -->
<input type="text" s-model="message">
<button @click="handle">按钮</button>
</div>`));
Vue.config.productionTip = false
import message from './components/notify/index.js'
Vue.use(message)
import btn from './components/button.vue'
import dialog from './components/dialog.vue'
import link from './components/link.vue'

Vue.component('sr-button',btn)
Vue.component('sr-link',link)
Vue.component('sr-dialog',dialog)
new Vue({
  render: h => h(App),
}).$mount('#app')
