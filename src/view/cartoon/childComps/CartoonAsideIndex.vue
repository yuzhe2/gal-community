<template>
  <div class="index-panel--cartoon">
    <div class="index-panel__header">
      <span>索引</span>
    </div>
    <div class="index-panel__main">
      <ul class="index-panel__list">
        <li 
          v-for="(item, index) in indexData"
          :key="index"
          class="index-panel__item"
        >
          <a
            :style="'background-color:'+ item.color" 
            href="javascript:;" class="index-panel__item--link"
          >
            {{item.name}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartoonAsideIndex",
  props: {
    indexData: {
      type: Array,
    }
  },
  created() {
    console.log(this.indexData);
  }
}
</script>

<style lang="scss">
.index-panel--cartoon {
  background-color: rgba(255, 255, 255, .7);
  border-radius: 4px;
  box-shadow: 0 0px 5px #c2c2c2;
  transition: all .3s ease-in-out;
}

.index-panel--cartoon:hover {
  box-shadow: 0px 0px 50px black;
}

.index-panel__header {
  position: relative;
  padding: 10px;
  padding-left: 35px;
  border-bottom: 1px solid #f5f6f7;
  color: #3d4450;
  font-weight: bold;
}

.index-panel__header::before {
  content: "//";
  position: absolute;
  color: #e70000;
  top: 9px;
  left: 16px;
  font-size: 22px;
}

.index-panel__list {
  display: flex;
  flex-wrap: wrap;
  opacity: .7;
  padding: 10px;
}

.index-panel__item {
  margin-left: 4px;
  margin-bottom: 4px;
  border-radius: 4px;
  overflow: hidden;
}

.index-panel__item--link {
  display: inline-block;
  padding: 6px;
  color: #fff;
  font-size: 14px;
}
</style>