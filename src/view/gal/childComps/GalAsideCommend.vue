<template>
  <div 
    class="article-panel"
    :class="!openPanel ? 'close' : null"
  >
    <div class="article-panel__header">
      <i :class="title.icon"></i>
      <span class="article-panel__header--text">{{title.name}}</span>
      <i class="fa fa-times-circle panel-remove"></i>
      <i 
        @click="openPanel = !openPanel"
        class="fa fa-chevron-circle-up panel-toggle"
        :class="openPanel ? 'fa-chevron-circle-up' : 'fa-chevron-circle-down'"
      ></i>
    </div>
    <div class="article-panel__main">
      <ul class="article-panel__main__article-list">
        <li
          v-for="(item, index) in list"
          class="article-panel__main__article-item"
          :key="index"
        >
          <a href="javascript:;" class="article-panel__main__article-item__link">
            <slot name="content" :single="item"></slot>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "articleAsideCommend",
  props: {
    list: {
      type: Array,
    },
    title: {
      type: Object,
    }
  },
  data() {
    return {
      openPanel: true,
    }
  },
}
</script>

<style lang="scss">
.article-panel {
  width: 360px;
  margin-top: 30px;
  border-radius: 4px;
  box-shadow: 0 0px 5px #c2c2c2;
  overflow: hidden;
}

.article-panel:hover {
  box-shadow: 0px 0px 50px #000;
}

.article-panel.close .article-panel__main {
  height: 0px;
}


.article-panel__header {
  padding: 10px 15px;
  background-color: rgba(10, 10, 0, 0.7);
  color: #fff;
  font-size: 14px;
}

.panel-toggle,
.panel-remove {
  float: right;
  margin-left: 5px;
}

.panel-toggle:hover,
.panel-remove:hover {
  color: #d9534f;
  cursor: pointer;
  transition: all .3s ease-in-out;
}

.article-panel__main {
  overflow: hidden;
}

.article-panel__main__article-item {
  padding: 10px 15px;
  border-bottom: 1px solid #ddd;
  background-color: rgba(230, 238, 232, 0.3);
  transition: all .5s ease-in-out;
  cursor: pointer;
}

.article-panel__main__article-item:hover {
  background-color: rgba(255,255,255,0.7);
  box-shadow: 0px 0px 50px #000;
}

.article-panel__main__article-item__link {
  display: block;
  color: #3d4450;
  font-size: 12px;
  line-height: 20px;
  transition: color .5s ease-in-out;
}

.article-panel__main__article-item:hover a{
  color: #b94a48;
}

.article-panel__main__article-item__img {
  float: left;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  transition: all .3s ease-in-out;
}

.article-panel__main__article-item__img:hover {
  transform: scale(1.2);
}

.article-panel__main__article-item__text--comment {
  width: 264px;
  height: 36px;
  margin-left: 57px;
  padding: 8px;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #eee;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden; 
}
</style>