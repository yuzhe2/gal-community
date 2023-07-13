<template>
  <div class="detail">
    <div class="detail-body">
      <div class="game-tit">
        <h3 class="game-tit__text">{{ name }}</h3>
      </div>
      <div class="game-screenshot__show">
        <img :src="gamePhoto" class="game-screenshot__img" />
      </div>
      <div class="game-introduction">
        <div class="game-introduction__brief">
          <span class="game-introduction__brief--tit">简介</span>
          <div class="game-introduction__brief--text">{{ brief }}</div>
        </div>
        <div class="game-introduction__time clearfix">
          <div class="game-introduction__time--sale">
            <span class="game-introduction__time--sale__tit">发售时间</span>
            {{ saleTime }}
          </div>
          <div class="game-introduction__time--sinic">
            <span class="game-introduction__time--sinic__tit">汉化时间</span>
            {{ sinicTime }}
          </div>
        </div>
        <div class="game-introduction__details">
          <span class="game-introduction__details__tit">详细介绍</span>
          <ul class="game-introduction__details__list">
            <li
              v-for="(item, index) in details"
              class="game-introduction__details__item"
              :key="index"
            >
              <p>{{ item }}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="game-comment">
        <h3 class="game-comment-title">
          <i class="fa fa-comments"></i>
          327条评论
        </h3>
        <div class="game-comment-container">
          <div
            v-for="(item, index) in commentData"
            :key="index"
            class="game-comment-item"
          >
            <div class="game-comment-item-user">
              <a href="javascript:;" class="game-comment-item-user-link">
                <img :src="item.userPortrait" />
              </a>
            </div>
            <div class="game-comment-item-content">
              <div class="game-comment-item-content-user">
                <span class="game-comment-item-content-user-name">
                  {{ item.userName }}
                </span>
              </div>
              <p class="game-comment-item-content-text">
                {{ item.commentText }}
              </p>
              <div class="game-comment-item-content-info">
                <span class="game-comment-item-content-info-time">
                  {{ item.commentTime }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSingleGame } from "network/game";

import { restSingle, extractText, extractTime } from "src/common/util";

export default {
  name: "DetailShower",
  data() {
    return {
      id: null,
      name: null,
      gamePhoto: null,
      brief: null,
      saleTime: null,
      sinicTime: null,
      details: null,
      // 用户评论区中的内容(临时数据)
      commentData: [],
    };
  },
  methods: {
    /**
     * 用来处理请求回来的评论数据
     */ 
    handleCommentData(list) {
      let commentList = [];
      list.forEach((comment) => {
        let obj = {};
        obj.userName = comment.user.name;
        obj.userPortrait = `https://gallibrary.pw${comment.user.photo}`;
        obj.commentText = extractText(comment.data);
        const time = extractTime(comment.createTime);
        obj.commentTime = `${time.year}-${time.mouth}-${time.data} ${time.hour}:${time.minute}`;
        commentList.push(obj);
      });
      return commentList;
    },
  },
  created() {
    this.id = this.$route.params.id;
    getSingleGame(this.id).then((res) => {
      let singleData = restSingle(res.data.galData.data);
      this.name = singleData.name;
      this.gamePhoto = singleData.gamePhoto;
      this.brief = singleData.brief;
      this.saleTime = singleData.saleTime;
      this.sinicTime = singleData.sinicTime;
      this.details = singleData.details.split("。").filter((val) => val !== "");
      this.commentData = this.handleCommentData(res.data.galData.data.listComment);
    });
  },
};
</script>

<style lang="scss">
@media screen and (max-width: 900px) {
  .game-screenshot__show {
    width: 100%;
  }
}

.detail {
  margin: 0px 30px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.3);
}

.detail-body {
  padding: 20px;
  border: 1px solid #e3e3e3;
  background-color: rgba(245, 245, 245, 0.3);
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.game-tit {
  margin-bottom: 15px;
  font-size: 36px;
  color: #333;
  text-align: center;
}

.game-screenshot__show {
  width: 673px;
  margin: 0px auto 10px;
}

.game-introduction {
  padding: 10px;
}

.game-introduction__brief {
  margin-bottom: 20px;
}

.game-introduction__brief--tit {
  float: left;
  margin-right: 42px;
  color: #5bc0de;
}

.game-introduction__brief--text {
  display: inline-block;
  width: calc(100% - 105px);
  padding: 20px;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  background-color: rgba(230, 238, 232, 0.5);
  box-shadow: 0 1px 1px 1px rgba(227, 227, 227, 0.5);
  color: #3d4450;
  line-height: 25px;
}

.game-introduction__time {
  margin-bottom: 20px;
  color: #777;
}

.game-introduction__time--sale {
  float: left;
  width: 100px;
}

.game-introduction__time--sale__tit {
  display: inline-block;
  margin-bottom: 4px;
  color: #4285f4;
}

.game-introduction__time--sinic {
  float: right;
  width: 100px;
  text-align: center;
}

.game-introduction__time--sinic__tit {
  display: block;
  margin-bottom: 4px;
  color: #fbb405;
}

.game-introduction__details__tit {
  float: left;
  margin-right: 10px;
  color: #ea3445;
}

.game-introduction__details__list {
  display: inline-block;
  width: calc(100% - 126px);
  padding: 10px;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  box-shadow: 0 1px 1px 1px rgba(227, 227, 227, 0.5);
  background-color: rgba(218, 234, 211, 0.7);
}

.game-introduction__details__item {
  color: #34a753;
  line-height: 25px;
  font-weight: 700;
}

.game-comment {
  &-title {
    padding: 15px;
    background-color: rgba(217, 237, 247, 0.8);
    font-size: 14px;
    text-align: center;
    color: #3a87ad;
  }

  &-container {
    margin-top: 20px;

    .game-comment-item {
      display: flex;
      margin-bottom: 22px;

      &-user {
        &-link {
          display: inline-block;
          width: 140px;
          height: 140px;
        }
      }

      &-content {
        margin-top: 10px;
        margin-left: 10px;

        &-user {
          font-size: 14px;
          color: #8a6d3b;
          margin-bottom: 8px;
        }

        &-text {
          color: #333;
          margin-bottom: 8px;
        }

        &-info {
          color: #777;
        }
      }
    }
  }
}
</style>
