import vue from 'vue'
import message from './message.vue'
const mesObj = vue.extend(message)
// 定义弹出组件的函数 接收三个参数 消息 toast类型 显示时间
function show(context,title="提示",time=3000,){
    // 实例化一个 CustToast.vue
    const _message = new mesObj({
        name:'message',
        data(){
            return {
                message:context,
                title:title,
                isLife:true,
            }
        }
    })
    // 添加到页面中
    console.log(_message.$mount()); // 获取组件挂载后的实例
    let ele = _message.$mount().$el
    document.body.appendChild(ele);
    setTimeout(() => {
        _message.isLife = false
    }, time);

}
// 需要在main.js 里面使用 Vue.use(showToast);
show.install = (Vue) => {
    // 将组件注册到 vue 的 原型链里去,
    // 这样就可以在所有 vue 的实例里面使用 this.$toast()
    Vue.prototype.$message = show
};

// 导出
export default show