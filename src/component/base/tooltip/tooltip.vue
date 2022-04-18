<template>
  <el-tooltip
    :placement="placement"
    :content="content"
    :visible-arrow="visibleArrow"
    :effect="effect"
  >
    <span 
      v-if="!content"
      slot="content"
    >
      <slot name="content"></slot>
    </span>
    <slot></slot>
  </el-tooltip>
</template>

<script>
import { Tooltip } from "element-ui";

export default {
  components: {
    [Tooltip.name]: Tooltip
  },
  props: {
    // 显示的内容
    content: String, 
    // 出现的位置
    placement: {
      type: String,
      default: "top" 
    },
    // 是否显示箭头
    visibleArrow: {
      type: Boolean,
      default: true
    },
    // 主题色
    effect: {
      type: String,
      default: "light"
    }
  }
}
</script>

<style lang="scss">
</style>