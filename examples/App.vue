<template>
  <div id="app">
    <sr-dialog title="测试标题" width="30%" top="300px" :visible.sync="visible">
      哈
      <template #footer>
        <sr-button type="primary"  @click="visible=false">确定</sr-button>
        <sr-button @click="visible=false">取消</sr-button>
      </template>
    </sr-dialog>
    <sr-button @click="visible=true">显示</sr-button>
    <sr-button type="primary">显示2</sr-button>
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
