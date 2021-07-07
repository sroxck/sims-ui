<template>
  <a
    class="sr-link"
    :disabled="disabled"
    :target="target"
    :underline="underline"
    :class="[
      `sr-link--${type || 'default'}`,
      { 'is-disabled': disabled, 'is-underline': underline },
    ]"
    @click="disabled ? false : handleClick"
    :href="href"
  >
    <i v-if="icon" :class="icon"></i>
    <!-- 当我们没有传入插槽的时候,隐藏span -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </a>
</template>

<script>
export default {
  name: "sr-link",
  props: {
    type: {
      type: String,
      default: "default",
    },
    underline: {
      type: Boolean,
      default: true,
    },
    href: {
      type: String,
      default: null,
    },
    target: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
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
.sr-link {
  display: inline-block;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  position: relative;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
}
.sr-link--primary {
  color: #409eff;
}
.sr-link--success {
  color: #67c23a;
}
.sr-link--warning {
  color: #e6a23c;
}
.sr-link--danger {
  color: #f56c6c;
}
.sr-link--info {
  color: #909399;
}
.sr-link--default {
  color: #606266;
}
.sr-link.sr-link--primary.is-disabled {
  color: #a0cfff !important;
}
.sr-link.is-disabled {
  cursor: not-allowed;
}
.sr-link.sr-link--success.is-disabled {
  color: #b3e19d !important;
}
.sr-link.sr-link--warning.is-disabled {
  color: #f3d19e !important;
}
.sr-link.sr-link--danger.is-disabled {
  color: #fab6b6 !important;
}
.sr-link.sr-link--info.is-disabled {
  color: #c8c9cc !important;
}
.sr-link.sr-link--default.is-disabled {
  color: #c0c4cc !important;
}
.sr-link.sr-link--default:hover {
  color: #409eff;
}
.sr-link.sr-link--primary:hover {
  color: #66b1ff;
}
.sr-link.sr-link--success:hover {
  color: #85ce61;
}
.sr-link.sr-link--warning:hover {
  color: #ebb563;
}
.sr-link.sr-link--danger:hover {
  color: #f78989;
}
.sr-link.sr-link--info:hover {
  color: #a6a9ad;
}
.sr-link.sr-link--primary.is-underline:hover:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 0;
  bottom: 0;
  border-bottom: 1px solid #409eff;
}
.sr-link.sr-link--default.is-underline:hover:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 0;
  bottom: 0;
  border-bottom: 1px solid #409eff;
}
.sr-link.sr-link--success.is-underline:hover:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 0;
  bottom: 0;
  border-bottom: 1px solid #85ce61;
}
.sr-link.sr-link--warning.is-underline:hover:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 0;
  bottom: 0;
  border-bottom: 1px solid #ebb563;
}
.sr-link.sr-link--danger.is-underline:hover:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 0;
  bottom: 0;
  border-bottom: 1px solid #f78989;
}
.sr-link.sr-link--info.is-underline:hover:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 0;
  bottom: 0;
  border-bottom: 1px solid #a6a9ad;
}
</style>