<template>
  <div class="message-panel">
    <div class="message-panel__publish">
      <button class="message-panel__publish--btn">发布喇叭</button>
    </div>
    <div class="message-panel__wrap">
      <ul class="message-panel__list">
        <li 
          v-for="(item, index) in messageList" 
          :key="index" 
          class="message-panel__item"
        >
          <span class="message-panel__item__horn">小喇叭</span>
          <div class="message-panel__item__text">
            <span class="message-panel__item__text--user">{{item.user}}</span>
            <span class="message-panel__item__text--say">说:</span>
            <span class="message-panel__item__text--title">
              {{item.text}}
            </span>
          </div>
          <span class="message-panel__item__date">{{item.date}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalMainMessage",
  data() {
    return {
      messageList: [
        {
          user: "XUAZI",
          text: "这背景大晚上的扛不住呀。。。",
          date: "8小时"
        },
        {
          user: "Yu2ki",
          text: "......再发一次.1qkI9p6kyJ2Zscm7gEjsrFg jc25",
          date: "8小时"
        },
        {
          user: "XUAZI",
          text: "这背景大晚上的扛不住呀。。。",
          date: "9小时"
        },
        {
          user: "绅士96347号",
          text: "这背景太阴间了吧，吓死人了哟",
          date: "9小时"
        },
        {
          user: "Hati",
          text: "(╯'□')╯︵┻━┻但这提取码怎么是错的呢!",
          date: "9小时"
        },
        {
          user: "9664114bnm",
          text: "不惜硬币也要称赞英雄↓",
          date: "10小时"
        },
        {
          user: "潜行者",
          text: "我的初音呢？啊!我的初音去哪里了!今天不给我个交代谁都不准走!",
          date: "11小时"
        },
        {
          user: "gggggkkk",
          text: "这个背景!爱了爱了!",
          date: "11小时"
        }
      ]
    }
  }
};
</script>

<style lang="scss">
.message-panel {
  position: relative;
;
}

.message-panel__wrap {
  height: 160px;
  margin-bottom: 47px;
  padding: 20px 25px 5px 25px;
  border-radius: 6px;
  background-color: rgba(230, 238, 232, 0.5);
  overflow-y: scroll;
  transition: all 1s ease-in-out;
}

.message-panel__wrap:hover {
  background-color: rgba(0, 197, 183, 0.7);
}

.message-panel:hover .message-panel__item__text,
.message-panel:hover .message-panel__item__text--say,
.message-panel:hover .message-panel__item__date {
  color: #000;
  transition: all 0.3s ease-in-out;
}

.message-panel__wrap::-webkit-scrollbar {
  width: 6px;
  background-color: transparent;
}

.message-panel__wrap::-webkit-scrollbar-thumb {
  background-color: #00c5b7;
  border: 1px solid #fff;
  border-radius: 10px;
}

.message-panel__item {
  display: flex;
  justify-content: space-between;
  padding: 4px 0px;
  border-bottom: 1px dashed #3d4450;
  color: #409eff;
}

.message-panel__item__horn {
  border-radius: 4px;
  background-color: #f00;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  line-height: 20px;
}

.message-panel__item__text {
  width: calc(100% - 90px);
  font-size: 14px;
  font-weight: bold;
  color: #50504f;
}

.message-panel__item__text--say {
  font-weight: normal;
  color: #3d4450;
}

.message-panel__item__date {
  font-size: 12px;
  font-weight: bold;
  color: #50504f;
}

.message-panel__publish--btn {
  position: absolute;
  right: 17px;
  top: 9px;
  border-radius: 4px;
  background-color: #4e91db;
  color: #fff;
  font-size: 12px;
}
</style>