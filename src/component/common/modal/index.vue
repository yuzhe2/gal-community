<template>
  <div v-if="show">
    <div class="modal">
      <h3 class="modal-title">小喇叭</h3>
      <div class="modal-container">
        <div class="modal-container-cost">
          <span class="modal-container-cost-left common">发布代价</span>
          <span class="modal-container-cost-right"
            >20硬币(目前你剩余硬币:{{ coinSum }})</span
          >
        </div>
        <div class="modal-container-content">
          <span class="modal-container-content-left common">发布内容</span>
          <textarea
            v-model="content"
            ref="content"
            class="modal-container-content-right"
            placeholder="请输入小喇叭内容"
          ></textarea>
        </div>
        <div class="modal-container-words">
          <span class="modal-container-words-left common">当前字数</span>
          <span class="modal-container-words-right">{{ content.length }}</span>
        </div>
        <div class="modal-container-link">
          <span class="modal-container-link-left common">超链接</span>
          <input
            type="text"
            class="modal-container-link-right"
            ref="link"
            placeholder="注意禁止链接到非法网站"
          />
        </div>
      </div>
      <div class="modal-footer">
        <button class="modal-footer-confirm" @click="handleBtnType('confirm')">
          确认发送
        </button>
        <button class="modal-footer-cancel" @click="handleBtnType('cancel')">
          取消
        </button>
      </div>
    </div>
    <div class="modal-mask"></div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
  },
  data() {
    return {
      // 用户剩余的总硬币数
      coinSum: 93,
      // 发布内容
      content: "",
    };
  },
  methods: {
    /**
     * 根据按钮的类型来判断应该发送哪类事件
     * @param { String } -type 按钮的类型
     */
    handleBtnType(type) {
      if (type === "confirm") {
        const content = this.$refs.content.value,
          link = this.$refs.link.value;

        this.$emit(type, { content, link });
      } else {
        this.$emit(type);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.common {
  display: inline-block;
  text-align: right;
  width: 56px;
  color: #777;
  margin-right: 8px;
}
.modal {
  position: fixed;
  width: 400px;
  padding-left: 30px;
  padding-top: 20px;
  top: calc(50% - 140px);
  left: calc(50% - 200px);
  border-radius: 8px;
  font-size: 14px;
  background-color: rgba(230, 238, 232, 0.9);
  z-index: 1000;

  &-title {
    text-align: center;
    font-weight: bold;
    margin-bottom: 15px;
  }

  &-container {
    &-cost {
      display: flex;
    }

    &-content {
      display: flex;
      margin-top: 20px;

      &-right {
        width: 250px;
        height: 50px;
        text-indent: 12px;
        padding-top: 6px;
        outline: none;
        border-radius: 3px;
        resize: vertical;
      }

      &-right:focus {
        border-color: #4e91db;
      }
    }

    &-words {
      display: flex;
      align-items: center;
      margin-top: 20px;

      &-right {
        color: #8a6d3b;
      }
    }

    &-link {
      display: flex;
      margin-top: 20px;

      &-right {
        padding-top: 6px;
        padding-bottom: 6px;
        width: 250px;
        font-size: 12px;
        line-height: 20px;
        text-indent: 8px;
        border-radius: 3px;
        border: 1px solid rgb(133, 133, 133);
      }

      &-right:focus {
        border-color: #4e91db;
      }
    }
  }

  &-footer {
    margin-top: 15px;
    margin-bottom: 30px;
    margin-left: 64px;

    &-confirm {
      padding: 4px 14px;
      border-radius: 3px;
      color: #fff;
      margin-right: 8px;
      background-color: #4e91db;
      cursor: pointer;
    }

    &-cancel {
      padding: 4px 14px;
      border-radius: 3px;
      color: #fff;
      background-color: #d9534f;
      cursor: pointer;
    }
  }

  &-mask {
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9;
  }
}
</style>
