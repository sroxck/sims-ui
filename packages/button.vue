<template>
  <button
    class="sr-button"
    :disabled="disabled"
    :class="[
      `sr-button-${type}`,
      `sr-button--${size}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
    ]"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <!-- 当我们没有传入插槽的时候,隐藏span -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>


<script>
export default {
    name: 'sr-button',
  props: {
    type: {
      type: String,
      default: "default",
    },
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },   
    icon: {
      type: String,
      default: "",
    },
    disabled:{
       type: Boolean,
       default: false,
    },
     // 按钮大小
    size:{ default: 'defaultSize'}
  },
  created() {},
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>

<style lang="scss" scoped>
// 按钮大小样式说明
// 按钮尺寸:    default (默认)        medium (中等)         small (小型)         mini (迷你)
// 字体大小:    default (14px)       medium (14px)         small (12px)        mini (12px)
// 边距大小:    default (12px 20px)  medium (10px 20px)    small (9px 15px)    mini (7px 15px)
// 圆角大小:    default (5px)        medium (4px)          small (3px)         mini (3px)

// 按钮类型样式说明
// 按钮类型:    default (默认)        primary (主要)            success (成功)          warning (警告)           danger (危险)
// 字体颜色:    default (#606266)    primary (#fff)           success (#fff)          warning (#fff)          danger (#fff)
// 背景颜色:    default (#fff)       primary (#409eff)        success (#67c23a)       warning (#e6a23c)       danger (#f56c6c)
// 边框颜色:    default (#dcdfe6)    primary (#409eff)        success (#67c23a)       warning (#e6a23c)       danger (#f56c6c)

.sr-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
  }
}
.sr-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
  &:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
  }
}
.sr-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
  &:active {
    background: #5daf34;
    border-color: #5daf34;
    color: #fff;
  }
}
.sr-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
  &:active{
    background: #82848a;
    border-color: #82848a;
    color: #fff;
  }
}
.sr-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
  &:active {
    background: #cf9236;
    border-color: #cf9236;
    color: #fff;
  }
}
.sr-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
  &:active {
    background: #dd6161;
    border-color: #dd6161;
    color: #fff;
  }
}
// 朴素按钮样式
.sr-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.sr-button-primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.sr-button-success.is-plain {
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.sr-button-info.is-plain {
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.sr-button-warning.is-plain {
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.sr-button-danger.is-plain {
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
// round属性
.sr-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
// circle属性
.sr-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
// icon配套样式
.sr-button [class*="s-icon-"] + span {
  margin-left: 5px;
}
// disabled属性
.sr-button.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
/* 不同大小按钮的样式 */
// 默认按钮
.sr-button--defaultSize {
  font-size: 14px !important;
  padding: 12px 20px;
  border-radius: 5px;
}
// 中等按钮
.sr-button--medium {
  font-size: 14px !important;
  padding: 10px 20px;
  border-radius: 4px;
}
// 小型按钮
.sr-button--small {
  font-size: 12px !important;
  padding: 9px 15px;
  border-radius: 3px;
}
// 迷你按钮
.sr-button--mini {
  font-size: 12px !important;
  padding: 7px 15px;
  border-radius: 3px;
}
</style>