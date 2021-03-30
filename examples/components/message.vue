<template>
<div class="sr-message" v-if="isLife">
      <div class="sr-notification__group">
          <div class="sr-notification__title">
                <slot name="title">{{title}}</slot>
          </div>
        <slot>
            <div class="sr-notification__content">
                <p>{{message}}</p>
            </div>
        </slot>         
      </div>
      
</div>
  
</template>

<script>
export default {
    name:'sr-message',
    
    data(){
        return {
            title:'提示',
            message:"测试测试",
            isLife:false
        }
    }
}
</script>

<style lang="scss" scoped>

.sr-message{
     top: 16px;
     right: 0;
    z-index: 2031;
    animation: mess .4s;
    display: flex;
    width: 330px;
    padding: 14px 26px 14px 13px;
    border-radius: 8px;
    box-sizing: border-box;
    border: 1px solid #ebeef5;
    position: fixed;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    transition: opacity .3s,transform .3s,left .3s,right .3s,top .4s,bottom .3s;
    overflow: hidden;
}
.sr-notification__group{
        margin-left: 13px;
    margin-right: 8px;
}
.sr-notification__title {
    font-weight: 700;
    font-size: 16px;
    color: #303133;
    margin: 0;
}
.sr-notification__content{
    font-size: 14px;
    line-height: 21px;
    margin: 6px 0 0;
    color: #606266;
    text-align: justify;
}
@keyframes mess {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
</style>