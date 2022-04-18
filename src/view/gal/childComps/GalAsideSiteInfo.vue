<template>
  <div class="site-panel">
    <div class="site-panel__header">
      <button 
        @click="fadeToggle"
        class="site-panel__header__tags"
        :class="openCloud ? 'active' : null" 
      >
        标签
      </button>
      <button 
        @click="fadeToggle"
        class="site-panel__header__link"
        :class="!openCloud ? 'active' : null"
      >
        友情链接
      </button>
    </div>
    <div class="site-panel__main">
      <div 
        class="site-panel__main__tags-cloud"
        :class="openCloud ? 'active' : null"
        v-show="block"
      >
        <a
          v-for="(item, index) in tagsCloud"
          :style="'font-size:' + item.tagSize"
          href="javascript:;"
          :key="index"
        >
          {{ item.tagName }}
        </a>
      </div>
      <div 
        class="site-panel__main__outside-links"
        :class="!openCloud ? 'active' : null"
        v-show="!block"
      >
        <ul class="site-panel__main__outside-links--list">
          <li class="site-panel__main__outside-links--item">
            <a
              href="javascript:;"
              class="site-panel__main__outside-links--item__link"
            >
              KDays Forum
            </a>
          </li>
          <li class="site-panel__main__outside-links--item">
            <a
              href="javascript:;"
              class="site-panel__main__outside-links--item__link"
            >
              绅士导航♂
            </a>
          </li>
          <li class="site-panel__main__outside-links--item">
            <a
              href="javascript:;"
              class="site-panel__main__outside-links--item__link"
            >
              萌导航
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import tagsCloudData from "../../../tempData/tagsCloudData";

export default {
  name: "GalAsideTagCloud",
  data() {
    return {
      tagsCloud: tagsCloudData,
      openCloud: true,
      block: true,
    };
  },
  methods: {
    fadeToggle(e) {
      if (e.target.className.indexOf("tags") !== -1) {
        this.block = true;
        setTimeout(() => this.openCloud = true, 20)
      } else {
        this.block = false;
        setTimeout(() => this.openCloud = false, 20)
      }
    }
  }
};
</script>

<style lang="scss">
.site-panel {
  width: 360px;
  margin-top: 30px;
  border-radius: 4px;
  background-color: rgba(230, 238, 232, 0.5);
  box-shadow: 0 0px 5px #c2c2c2;
  transition: all 0.5s ease-in-out;
}

.site-panel:hover {
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 0px 50px black;
}

.site-panel__header {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.site-panel__header button {
  padding: 10px 15px;
  border-radius: 4px;
  background-color: transparent;
  color: #3d4450;
  cursor: pointer;
}

.site-panel__header button:hover,
.site-panel__header .active {
  background-color: #d9534f;
  color: #fff;
}

.site-panel__main {
  padding: 10px;
}

.site-panel__main .active {
  opacity: 1;
  transition: opacity .3s linear;
}

.site-panel__main__tags-cloud,
.site-panel__main__outside-links {
  opacity: 0;
}

.site-panel__main__tags-cloud a {
  display: inline-block;
  margin: 0px 2px;
  padding: 2px 6px 3px 6px;
  color: #fff;
  opacity: 0.6;
}

.site-panel__main__tags-cloud a:nth-child(7n + 1) {
  background-color: #428bca;
}

.site-panel__main__tags-cloud a:nth-child(7n + 2) {
  background-color: #5cb85c;
}

.site-panel__main__tags-cloud a:nth-child(7n + 3) {
  background-color: #d9534f;
}

.site-panel__main__tags-cloud a:nth-child(7n + 4) {
  background-color: #f0ad4e;
}

.site-panel__main__tags-cloud a:nth-child(7n + 5) {
  background-color: #b37333;
}

.site-panel__main__tags-cloud a:nth-child(7n + 6) {
  background-color: #b433ff;
}

.site-panel__main__tags-cloud a:nth-child(7n + 7) {
  background-color: #4a4a4a;
}

.site-panel__main__outside-links--item__link {
  display: block;
  padding: 10px 15px;
  font-size: 14px;
  color: #3d4450;
  transition: all .2s ease-in-out;
}

.site-panel__main__outside-links--item__link:hover {
  background-color: #d9534f;
  color: #fff;
}
</style>