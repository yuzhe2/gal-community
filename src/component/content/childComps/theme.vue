<template>
  <span>
    <v-tooltip :content="'切换主题'">
      <i class="el-icon-cpu" @click="visible = true"></i>
    </v-tooltip>
    <v-drawer :visible.sync="visible" :title="'系统配置'">
      <div class="banner-drawer">
        <p>主题色</p>
        <ul class="themes">
          <li
            v-for="(index, item) in themes"
            :key="index"
            :style="{
              'background-color': index,
            }"
            @click="handleChangeTheme(item)"
          >
            <i v-if="activeTheme === item" class="el-icon-check"></i>
          </li>
        </ul>
      </div>
    </v-drawer>
  </span>
</template>

<script>
export default {
  name: "theme",
  data() {
    return {
      visible: false,
      themes: {
        blue: "#1a70ff",
        red: "#FF1A1A",
        orange: "#FF791A",
        purple: "#941AFF",
        green: "#5DA875",
      },
      activeTheme: "",
    };
  },
  methods: {
    handleChangeTheme(theme) {
      window.document.documentElement.setAttribute('data-theme', theme);
      window.localStorage.setItem('theme', theme);
      this.activeTheme = theme;
      this.$message('主题修改成功');
    }
  }
};
</script>

<style lang="scss">
.el-icon-cpu {
  font-size: 28px;
  color: $blue;
  cursor: pointer;
}

.themes {
  display: flex;
  justify-content: space-between;
  padding: 0 5px;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;

    .el-icon-check {
      color: #fff;
    }
  }
}
</style>
