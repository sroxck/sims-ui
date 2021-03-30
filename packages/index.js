import Button from './button'
import Dialog from './dialog'
import message from './message.js'
import Message from './message.vue'

import './icon/iconfont.css'
const componentList = [Button,Dialog,Message]
const install = function (vue){
    componentList.forEach(item=>{
        vue.component(item.name,item)
    })
    vue.use(message)
}
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
  }
export default {
    install
}