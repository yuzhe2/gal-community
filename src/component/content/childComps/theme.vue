<template>
  <span>
    <v-tooltip
      :content="'切换主题'"
    >
      <i 
        class="el-icon-cpu"
        @click="visible = true"
      ></i>
    </v-tooltip>
    <v-drawer
      :visible.sync="visible"
      :title="'系统配置'"
    >
    </v-drawer>
  </span>
</template>

<script>
export default {
  name: 'theme',
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style lang="scss">
.el-icon-cpu {
  font-size: 28px;
  color: $blue;
  cursor: pointer;
}
</style>