<template >
    <div class="divider" :class="[`is-${direction}`]" >
        <div class="content" :class="['content', `is-${position}`,]" v-if="direction ==='horizontal'">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        position:{
            type:String,
            default:'center',
        },
        direction:{
            type:String,
            default:'horizontal'
        }
    },
    data(){
        return {

        }
    }
}
</script>
<style scoped>
.divider{
    background: #dcdfe6;
    position: relative;
}
.is-horizontal{
    height: 1px;
    width: 100%;
    margin: 24px 0;
}
.is-vertical{
    height: 1em;
    width: 1px;
    display: inline-block;
    margin: 0 8px;
    vertical-align: middle;;
}
.content{
    position: absolute;
    background-color: #fff;
    padding: 0 20px;
    font-weight: 500;
    color: #303133;
    font-size: 14px;
}
.is-center{
    left: 50%;
    transform: translate(-50%, -50%);
}
.is-left{
    left: 20px;
    transform: translateY(-50%);
}
.is-right{
    right: 20px;
    transform: translateY(-50%);
}
</style>