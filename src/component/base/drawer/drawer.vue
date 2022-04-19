<template>
  <el-drawer
    class="ui-drawer"
    :visible="visible"
    @update:visible="handleClose"
    :with-header="false"
    :modal="false"
    :size="size"
  >
    <template slot="default">
      <div class="drawer-title">
        <slot name="title">
          {{ title }}
        </slot>
        <i class="el-icon-close" @click="handleClose"></i>
        <slot></slot>
      </div>
    </template>
  </el-drawer>
</template>

<script>
import { Drawer } from "element-ui"

export default {
  name: 'vDrawer',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: String,
    size: {
      type: [String, Number],
      default: '330px'
    }
  },
  components: {
    [Drawer.name]: Drawer
  },
  methods: {
    handleClose() {
      this.$emit('update:visible', false);
    }
  }
}
</script>

<style lang="scss" scoped>
  .ui-drawer.el-drawer__wrapper {
    div.drawer-title {
      position: relative;
      height: 44px;
      padding-left: 10px;
      line-height: 44px;
      .el-icon-close {
        position: absolute;
        top: 10px;
        right: 20px;
        font-size: 28px;
        cursor: pointer;
      }
    }
    ::v-deep .el-drawer {
      top: 50px;
      height: calc(100% - 50px);
      background-color: rgba(255, 255, 255, .7);
    }
  }
</style>