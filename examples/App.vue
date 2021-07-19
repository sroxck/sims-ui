<template>
  <div id="app">
    <!-- <sr-button @click="$message('消息测试')">notify测试</sr-button> -->
    <h1>按钮组件</h1>
    <sr-divider></sr-divider>
    <h2>基础按钮: 提供type参数: default,primary,danger,info,warning,success</h2>
    <sr-button @click="$message('按钮被点击了')" type="">普通按钮</sr-button>
    <sr-button @click="$message('按钮被点击了')" type="primary">主要按钮</sr-button>
    <sr-button @click="$message('按钮被点击了')" type="danger">危险按钮</sr-button>
    <sr-button @click="$message('按钮被点击了')" type="info">信息按钮</sr-button>
    <sr-button @click="$message('按钮被点击了')" type="warning">警告按钮</sr-button>
    <sr-button @click="$message('按钮被点击了')" type="success">成功按钮</sr-button>
   <sr-divider></sr-divider>
    
    <h2>朴素按钮: 提供plain参数,布尔值,默认false</h2>
    <sr-button plain @click="$message('按钮被点击了')" type="">普通按钮</sr-button>
    <sr-button plain @click="$message('按钮被点击了')" type="primary">主要按钮</sr-button>
    <sr-button plain @click="$message('按钮被点击了')" type="danger">危险按钮</sr-button>
    <sr-button plain @click="$message('按钮被点击了')" type="info">信息按钮</sr-button>
    <sr-button plain @click="$message('按钮被点击了')" type="warning">警告按钮</sr-button>
    <sr-button plain @click="$message('按钮被点击了')" type="success">成功按钮</sr-button>
   <sr-divider></sr-divider>
    <h2>圆角按钮: 提供round参数,布尔值,默认false</h2>
    <sr-button round plain @click="$message('按钮被点击了')" type="">普通按钮</sr-button>
    <sr-button round plain @click="$message('按钮被点击了')" type="primary">主要按钮</sr-button>
    <sr-button round plain @click="$message('按钮被点击了')" type="danger">危险按钮</sr-button>
    <sr-button round plain @click="$message('按钮被点击了')" type="info">信息按钮</sr-button>
    <sr-button round plain @click="$message('按钮被点击了')" type="warning">警告按钮</sr-button>
    <sr-button round plain @click="$message('按钮被点击了')" type="success">成功按钮</sr-button>
   <sr-divider></sr-divider>
    <h2>圆型按钮: 提供circle参数,布尔值,默认false(配合icon使用,使用文字会导致圆形不正)</h2>
    <sr-button circle plain @click="$message('按钮被点击了')" type=""></sr-button>
    <sr-button circle plain @click="$message('按钮被点击了')" type="primary"></sr-button>
    <sr-button circle plain @click="$message('按钮被点击了')" type="danger"></sr-button>
    <sr-button circle plain @click="$message('按钮被点击了')" type="info"></sr-button>
    <sr-button circle plain @click="$message('按钮被点击了')" type="warning"></sr-button>
    <sr-button circle plain @click="$message('按钮被点击了')" type="success"></sr-button>
   <sr-divider></sr-divider>
    <h2>icon按钮: 提供icon参数,类型为前缀是s-icon-iconName的字符串</h2>
    <sr-button circle plain icon="s-icon-delete" @click="$message('按钮被点击了')" type=""></sr-button>
    <sr-button circle plain icon="s-icon-delete" @click="$message('按钮被点击了')" type="primary"></sr-button>
    <sr-button circle plain icon="s-icon-delete" @click="$message('按钮被点击了')" type="danger"></sr-button>
    <sr-button circle plain icon="s-icon-delete" @click="$message('按钮被点击了')" type="info"></sr-button>
    <sr-button circle plain icon="s-icon-delete" @click="$message('按钮被点击了')" type="warning"></sr-button>
    <sr-button circle plain icon="s-icon-delete" @click="$message('按钮被点击了')" type="success"></sr-button>
   <sr-divider></sr-divider>
    <h1>对话框组件</h1>
    <sr-button @click="visible=true">打开对话框</sr-button>
    <!-- 基础对话框 -->
    <sr-dialog title="测试标题" width="30%" top="300px" :visible.sync="visible">
      <template>
        <sr-link target="_blank" href="http://www.bilibili.com"  type="danger" >前往Bilibili</sr-link>
      </template>
      <template #footer>
        <sr-button type="primary"  @click="visible=false">确定</sr-button>
        <sr-button @click="visible=false">取消</sr-button>
      </template>
    </sr-dialog>
   <sr-divider></sr-divider>
    
    <h1>消息通知组件</h1>
    <sr-button @click="$message('按钮被点击了')">打开普通通知</sr-button>
    <sr-button @click="$message.success('按钮被点击了')">打开成功通知</sr-button>
    <sr-button @click="$message.danger('按钮被点击了') ">打开危险通知</sr-button>
    <sr-button @click="$message.warning('按钮被点击了')">打开警告通知</sr-button>
    <sr-button @click="$message.info('按钮被点击了')">打开信息通知</sr-button>
   <sr-divider></sr-divider>
    <h1>文字链接组件</h1>
   <sr-divider></sr-divider>
    <h2>基础组件</h2>
    <sr-link  @click="$message('按钮被点击了')" type="">普通按钮</sr-link>
    <sr-link @click="$message('按钮被点击了')" type="primary">主要按钮</sr-link>
    <sr-link @click="$message('按钮被点击了')" type="danger" >危险按钮</sr-link>
    <sr-link @click="$message('按钮被点击了')" type="info">信息按钮</sr-link>
    <sr-link @click="$message('按钮被点击了')" type="warning">警告按钮</sr-link>
    <sr-link @click="$message('按钮被点击了')" type="success">成功按钮</sr-link>
   <sr-divider></sr-divider>
    <h2>禁用组件: 通过disabled属性禁用,事件不会继续触发</h2>
    <sr-link disabled  @click="$message('按钮被点击了')" >普通按钮</sr-link>
    <sr-link disabled @click="$message('按钮被点击了')" type="primary">主要按钮</sr-link>
    <sr-link disabled @click="$message('按钮被点击了')" type="danger" >危险按钮</sr-link>
    <sr-link disabled @click="$message('按钮被点击了')" type="info">信息按钮</sr-link>
    <sr-link disabled @click="$message('按钮被点击了')" type="warning">警告按钮</sr-link>
    <sr-link disabled @click="$message('按钮被点击了')" type="success">成功按钮</sr-link>
   <sr-divider></sr-divider>
    <h2>无下划线:通过underline属性控制是否显示下划线,默认true,显示</h2>
    <sr-link :underline="false"  @click="$message('按钮被点击了')" >普通按钮</sr-link>
    <sr-link :underline="false" @click="$message('按钮被点击了')" type="primary">主要按钮</sr-link>
    <sr-link :underline="false" @click="$message('按钮被点击了')" type="danger" >危险按钮</sr-link>
    <sr-link :underline="false" @click="$message('按钮被点击了')" type="info">信息按钮</sr-link>
    <sr-link :underline="false" @click="$message('按钮被点击了')" type="warning">警告按钮</sr-link>
    <sr-link :underline="false" @click="$message('按钮被点击了')" type="success">成功按钮</sr-link>
   <sr-divider></sr-divider>
    <h2>icon:和button组件相同</h2>
    <sr-link icon="s-icon-delete"  @click="$message('按钮被点击了')" >普通按钮</sr-link>
    <sr-link  icon="s-icon-delete" @click="$message('按钮被点击了')" type="primary">主要按钮</sr-link>
    <sr-link  icon="s-icon-delete" @click="$message('按钮被点击了')" type="danger" >危险按钮</sr-link>
    <sr-link  icon="s-icon-delete" @click="$message('按钮被点击了')" type="info">信息按钮</sr-link>
    <sr-link  icon="s-icon-delete" @click="$message('按钮被点击了')" type="warning">警告按钮</sr-link>
    <sr-link  icon="s-icon-delete" @click="$message('按钮被点击了')" type="success">成功按钮</sr-link>
   <sr-divider></sr-divider>
    <h2>支持a标签原生属性,href和target</h2>
    <sr-link target="_blank" href="http://www.bilibili.com"  type="danger" >前往Bilibili</sr-link>
   <sr-divider></sr-divider>
    <h2>分割线组件</h2>
    <div style="border:1px solid #ccc;width:800px;margin:0 auto;padding:30px">
      <sr-divider position="left">文字靠左</sr-divider>
      <sr-divider position="center">文字居中</sr-divider>
      <sr-divider position="right">文字靠右</sr-divider>
      <div style="text-align:center">
          方向转换
        <sr-divider position="right" direction="vertical"></sr-divider>
          不可使用
        <sr-divider position="right" direction="vertical"></sr-divider>
          插槽传值
      </div>
    </div>
        <sr-divider ></sr-divider>

  </div>
</template>
<script>
export default {
  data(){
    return{
      visible:false
    }
  },
  methods:{
    fn(){
      console.log(3333);
    }
  }
}
</script>

<style lang="scss">

</style>
