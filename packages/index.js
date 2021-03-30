import Button from './button'
import Dialog from './dialog'
import './icon/iconfont.css'
const componentList = [Button,Dialog]
const install = function (vue){
    componentList.forEach(item=>{
        vue.component(item.name,item)
    })
}
// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
  }
export default {
    install
}