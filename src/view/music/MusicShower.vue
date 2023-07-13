<template>
  <div class="music">
    <div class="blur-img">
      <div class="blur-mask"></div>
    </div>
    <div class="music-header">
      <span class="music-header-text">♫ 青葱音乐阁 Player</span>
    </div>
    <div class="music-main">
      <div class="music-main-left">
        <div class="music-main-left-func">
          <span class="func-item ing" @click="jumpSheet('now')">我喜欢的</span>
          <span class="func-item list" @click="jumpList">播放列表</span>
          <span class="func-item search">歌曲搜索</span>
          <span class="func-item add" @click="addListShow = true"
            >新增歌单</span
          >
        </div>
        <div class="music-main-left-list" :class="sheetShow ? '' : 'Inactive'">
          <div class="wrap">
            <div class="list-item list-head">
              <span class="music-album" style="width: 440px">歌曲</span>
              <span class="auth-name" style="width: 150px">歌手</span>
              <span class="music-name" style="width: 150px">专辑</span>
            </div>
            <div
              class="list-item"
              v-for="(item, index) in currentList"
              :key="index"
            >
              <span
                v-if="playState && item.id === activeMusicId"
                class="songlist__number"
                style="width: 30px"
              ></span>
              <span style="width: 30px" class="item-num" v-else>{{
                index + 1
              }}</span>
              <div class="item-name" style="width: 440px">
                <span
                  class="item-name-text"
                  :class="
                    playState && item.id === activeMusicId ? 'highlight' : ''
                  "
                  @contextmenu.prevent="handleClickFunc(item, $event)"
                  >{{ item.name }}</span
                >
                <div class="item-name-func">
                  <span
                    class="item-icon item-play"
                    title="点击播放这首歌"
                    @click="funcItem(item, 'play')"
                  ></span>
                  <span
                    class="item-icon item-download"
                    title="点击下载这首歌"
                    @click="funcItem(item, 'download')"
                  ></span>
                  <span
                    class="item-icon item-delete"
                    title="删除"
                    @click="funcItem(item, 'delete')"
                  ></span>
                </div>
              </div>
              <span class="item-auth" style="width: 150px">{{
                item.auth
              }}</span>
              <span class="item-cult" style="width: 150px">{{
                item.cult
              }}</span>
            </div>
          </div>
        </div>
        <div class="list-main-wrap" :class="sheetShow ? 'Inactive' : ''">
          <ul class="list-main">
            <li class="list-item" @click="jumpSheet">
              <img
                :src="
                  activeMusic.img
                    ? activeMusic.img
                    : 'https://musi.llgal.xyz/images/player_cover.png'
                "
                class="list-item-img"
              />
              <div class="list-item-text">正在播放</div>
            </li>
            <li class="list-item" @click="jumpSheet('history')">
              <img
                src="https://musi.llgal.xyz/images/history.png"
                class="list-item-img"
              />
              <span class="list-item-text">播放历史</span>
            </li>
            <li class="list-item">
              <img
                src="https://p1.music.126.net/DxqxvpUD1p5N2WBx7DAxdw==/19105114044816301.jpg?param=200y200"
                class="list-item-img"
              />
              <span class="list-item-text"
                >日语歌曲推荐第一期（单身群友力荐）</span
              >
            </li>
            <li class="list-item">
              <img
                src="https://p1.music.126.net/bJi9a4jMScMzQFRcz2Asbw==/18876415626028442.jpg?param=200y200"
                class="list-item-img"
              />
              <span class="list-item-text">日语TOP 10</span>
            </li>
            <li
              class="list-item"
              v-for="(item, index) in songSheetCustom"
              :key="index"
              @click="jumpCustomSheet(item.id)"
            >
              <img
                :src="item.songList[0] ? item.songList[0].img : item.songImg"
                class="list-item-img"
              />
              <span class="list-item-text">{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="music-main-right">
        <img
          class="music-main-right-img"
          :src="
            activeMusic.img
              ? activeMusic.img
              : 'https://musi.llgal.xyz/images/player_cover.png'
          "
        />
        <div class="lrc-wrap">
          <ul
            class="lrc-list"
            ref="lrc"
            :style="{ transform: `translateY(${-scrollHeight}px)` }"
          >
            <li
              v-for="(item, index) in lrc"
              :key="index"
              class="lrc-item"
              :class="activeLrc === item.time ? 'playing' : ''"
            >
              {{ item.text }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="music-footer">
      <div class="music-footer-func">
        <a
          href="javascript:;"
          class="player-btn btn-prev"
          title="上一首"
          @click="controlMusic('prev')"
        ></a>
        <a
          href="javascript:;"
          class="player-btn btn-play"
          :class="playState ? 'btn-state-paused' : ''"
          @click="controlMusic('switch')"
          title="暂停/继续"
        ></a>
        <a
          href="javascript:;"
          class="player-btn btn-next"
          title="下一首"
          @click="controlMusic('next')"
        ></a>
        <a
          href="javascript:;"
          class="player-btn btn-order"
          :class="playPolicy[currentPolicy].class"
          :title="playPolicy[currentPolicy].title"
          @click="switchPolicy"
        ></a>
      </div>
      <div class="music-footer-progress">
        <div>
          <div class="music-info" v-if="activeMusicId">
            <span class="base">{{ activeMusic.name + ' - ' + activeMusic.auth }}</span>
            <span class="time">{{ currentTime | formatTime }} / 4.28</span>
          </div>
          <div class="volume-bar-wrap" @click="jumpProgress('progress', $event)">
            <div class="volume-bar"></div>
          </div>
        </div>
        <div class="volume-cur-wrap">
          <div
            class="volume-cur"
            :style="{ transform: `translateX(${speedNum}px)` }"
            @click="jumpProgress('progress', $event)"
          ></div>
        </div>
        <div
          class="volume-dot"
          :style="{ transform: `translateX(${speedNum}px)` }"
          :class="playState ? 'dot-move' : ''"
          @mousedown="processDown"
        ></div>
      </div>
      <div class="music-footer-volume">
        <div
          class="btn-quiet"
          :class="percentNum === 0 ? 'btn-state-quiet' : ''"
        ></div>
        <div class="volume-bar-wrap" @click="jumpProgress('volume', $event)">
          <div class="volume-bar"></div>
        </div>
        <div class="volume-cur-wrap">
          <div
            class="volume-cur"
            :style="{ transform: `translateX(${percentNum}px)` }"
            @click="jumpProgress('volume', $event)"
          ></div>
        </div>
        <div
          class="volume-dot"
          @mousedown="volumeDown"
          :style="{ transform: `translateX(${percentNum}px)` }"
        ></div>
      </div>
    </div>
    <div v-show="addListShow" class="layui-layer-shade"></div>
    <div class="add-list" :class="addListShow ? 'active' : ''">
      <span class="close" @click="addListShow = false"></span>
      <div class="add-wrap">
        <input
          type="text"
          class="add-input"
          autofocus
          placeholder="歌单名"
          v-model="addListVal"
          @keydown.enter="addSongList"
        />
        <button class="add-btn" @click="addSongList">添加</button>
      </div>
    </div>
    <div class="to-sheet" v-show="toSheetShow" :style="toSheetSty.style">
      <ul class="to-sheet-wrap">
        <li class="to-sheet-item" @click="toSheet(null)">
          <span class="text">我喜欢</span>
        </li>
        <li
          v-for="(item, index) in songSheetCustom"
          :key="index"
          class="to-sheet-item"
          @click="toSheet(item.id)"
        >
          <span class="text">{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <audio :src="activeMusic.src" v-show="false" ref="music"></audio>
  </div>
</template>

<script>
import lrc from "./data";

export default {
  data() {
    return {
      activeMusicId: null, // 活跃的歌曲id
      currentList: [], // 当前播放的歌单
      // 我喜欢的歌单
      musicList: [
        {
          id: 3,
          name: "桜",
          auth: "堀江由衣",
          cult: "水たまりに映るセカイ",
          src: "https://music.163.com/song/media/outer/url?id=574739.mp3",
          img: "https://p3.music.126.net/gvVauCN2LNB7EhWOasf68w==/109951163351500137.jpg?param=300y300",
        },
        {
          id: 5,
          name: "逆さまの蝶",
          auth: "SNoW",
          cult: "逆さまの蝶",
          src: "https://music.163.com/song/media/outer/url?id=22707009.mp3",
          img: "https://p3.music.126.net/PtLd62-khEg8iCutTdE5Vg==/109951163286813093.jpg?param=300y300",
        },
        {
          id: 7,
          name: "小さなてのひら",
          auth: "riya",
          cult: "CLANNAD ORIGINAL SOUNDTRACK",
          src: "https://music.163.com/song/media/outer/url?id=35345481.mp3",
          img: "https://p3.music.126.net/kRdEbe6fTsVDH-dMhcOHhw==/19171084741935656.jpg?param=300y300",
        },
        {
          id: 9,
          name: "奏",
          auth: "スキマスイッチ",
          cult: "奏",
          src: "https://music.163.com/song/media/outer/url?id=28409128.mp3",
          img: "https://p3.music.126.net/PfxhEebDuQqQnuOKOJp4-A==/18428914393424537.jpg?param=300y300",
        },
        {
          id: 11,
          name: "歌に形はないけれど",
          auth: "doriko",
          cult: "初音ミクベスト ～memories～",
          src: "https://music.163.com/song/media/outer/url?id=22677579.mp3",
          img: "https://p3.music.126.net/xR3X82MvC7808gU1ip95cg==/754264976676294.jpg?param=300y300",
        },
        {
          id: 13,
          name: "Fall in the Dark",
          auth: "Yana",
          cult: "マジコカタストロフィ",
          src: "https://music.163.com/song/media/outer/url?id=26107975.mp3",
          img: "https://p3.music.126.net/MvHX3wWQ6ObGELE3uX4pvw==/2524478697397399.jpg?param=300y300",
        },
        {
          id: 15,
          name: "イノセント",
          auth: "秋山裕和",
          cult: "美少女万華鏡 -呪われし伝説の少女-",
          src: "https://music.163.com/song/media/outer/url?id=33735981.mp3",
          img: "https://p3.music.126.net/NJEGDjMBNdY9JtVFFp6Mdw==/7865906186262561.jpg?param=300y300",
        },
        {
          id: 1845816783,
          name: "泸沽湖（COVER：麻园诗人）",
          auth: "唐宇涵",
          cult: "T先生的COVER",
          src: "https://music.163.com/song/media/outer/url?id=1845816783.mp3",
          img: "https://p3.music.126.net/VcrKqGdrmPCJhw_m2_JdsA==/109951165988338094.jpg?param=300y300",
        },
        {
          id: 1859652717,
          name: "Moon Halo",
          auth: "茶理理 / TetraCalyx / Hanser / HOYO-MiX",
          cult: "Moon Halo",
          src: "https://music.163.com/song/media/outer/url?id=1859652717.mp3",
          img: "http://p1.music.126.net/ciLKATqflV2YWSV3ltE2Kw==/109951166159281275.jpg?param=300y300",
        },
        {
          id: 28466105,
          name: "殻ノ少女",
          auth: "MANYO",
          cult: "殻ノ少女 オリジナルサウンドトラック「Azure」",
          src: "https://music.163.com/song/media/outer/url?id=28466105.mp3",
          img: "http://p2.music.126.net/scAe3f-GkQvo2h91Gpb0Bg==/1729531800492601.jpg?param=300y300",
        },
        {
          id: 477428784,
          name: "别等了",
          auth: "新学校废物合唱团",
          cult: "别等了",
          src: "https://music.163.com/song/media/outer/url?id=477428784.mp3",
          img: "http://p3.music.126.net/dKGw_ZTaCMNe5uhSv6fZRQ==/109951162925551028.jpg?param=300y300",
        },
        {
          id: 469719260,
          name: "アスノヨゾラ哨戒班",
          auth: "Akie秋绘 / 夏璃夜",
          cult: "春雫。2017",
          src: "https://music.163.com/song/media/outer/url?id=469719260.mp3",
          img: "http://p2.music.126.net/aY9LN0OfVrkh5LO1chFQig==/109951162875736171.jpg?param=300y300",
        },
        {
          id: 4940920,
          name: "Butter-Fly",
          auth: "和田光司",
          cult: "DIGIMON HISTORY 1999-2006 All The Best",
          src: "https://music.163.com/song/media/outer/url?id=4940920.mp3",
          img: "http://p1.music.126.net/o8ZfncjFF5frq8Q8iJJ9QQ==/2321069046256264.jpg?param=300y300",
        },
        {
          id: 1379819365,
          name: "Butterfly",
          auth: "MIYAVI",
          cult: "NO SLEEP TILL TOKYO",
          src: "https://music.163.com/song/media/outer/url?id=1379819365.mp3",
          img: "http://p2.music.126.net/9bQAV8OXvGbMn9kMmmfErA==/109951164235631576.jpg?param=300y300",
        },
        {
          id: 1452859427,
          name: "Under the Sea (鲸落)",
          auth: "仁辰 / 南有乔木",
          cult: "Alice / 梦鲸",
          src: "https://music.163.com/song/media/outer/url?id=1452859427.mp3",
          img: "http://p2.music.126.net/e2xHHgD1cRDG7Kz75G289Q==/109951165035587653.jpg?param=300y300",
        },
        {
          id: 28239695,
          name: "Days of tears and lilies",
          auth: "三輪学",
          cult: "リトルバスターズ! ～Refrain～ Original SoundTrack",
          src: "https://music.163.com/song/media/outer/url?id=28239695.mp3",
          img: "http://p2.music.126.net/0Q8W3VsY-QV5ZAd0OruTHw==/5873591115719399.jpg?param=300y300",
        },
        {
          id: 759852,
          name: "里山小径",
          auth: "Key Sounds Label",
          cult: "Albina -Assorted Kudwaf Songs-",
          src: "https://music.163.com/song/media/outer/url?id=759852.mp3",
          img: "http://p2.music.126.net/vM-5UTVh7ri0XQ3tS90-jQ==/2484896278797452.jpg?param=300y300",
        },
        {
          id: 28151024,
          name: "夏影",
          auth: "麻枝准",
          cult: "AIR ORIGINAL SOUNDTRACK",
          src: "https://music.163.com/song/media/outer/url?id=28151024.mp3",
          img: "http://p1.music.126.net/CI_u3SfBgdTIAQtFnn_wnQ==/6040716883009850.jpg?param=300y300",
        },
        {
          id: 28151050,
          name: "銀色",
          auth: "麻枝准",
          cult: "AIR ORIGINAL SOUNDTRACK",
          src: "https://music.163.com/song/media/outer/url?id=28151050.mp3",
          img: "http://p1.music.126.net/CI_u3SfBgdTIAQtFnn_wnQ==/6040716883009850.jpg?param=300y300",
        },
        {
          id: 28151049,
          name: "此処",
          auth: "戸越まごめ",
          cult: "AIR ORIGINAL SOUNDTRACK",
          src: "https://music.163.com/song/media/outer/url?id=28151049.mp3",
          img: "http://p1.music.126.net/CI_u3SfBgdTIAQtFnn_wnQ==/6040716883009850.jpg?param=300y300",
        },
      ],
      originList: [], // 记录下当前播放歌曲所在的歌单
      volumeClick: false, // 用来控制音量圆点
      processClick: false, // 用来控制进度条圆点
      lrcHeight: 0, // 歌词的总高度
      percentNum: 120, // 控制音量
      speedNum: 0, // 控制播放进度
      currentTime: 0, // 当前播放的时间
      alreadyNum: 0, // 当拖动进度条或音量条的时候记录已移动的距离
      originNum: 0, // 当拖动进度条或音量条的时候记录起始位置
      playState: false, // 是否处于播放状态
      currentPolicy: 0, // 表示当前处于哪种播放模式
      // 用来做播放模式的切换
      playPolicy: [
        { class: "btn-order-list", title: "列表循环" },
        { class: "btn-order-random", title: "随机播放" },
        { class: "btn-order-single", title: "单曲循环" },
      ],
      lrc, // 模拟歌词数据
      scrollHeight: 0, // 歌词的滚动距离
      sheetShow: true, // 用来做
      // 播放历史歌单
      historyList: [],
      // 添加歌单弹窗的显示控制
      addListShow: false,
      addListVal: "",
      // 自定义的歌单
      songSheetCustom: [
        {
          id: 1,
          createTime: 1661864436723,
          name: "橘子不是",
          songImg:
            "https://y.qq.com/mediastyle/global/img/cover_playlist.png?max_age=31536000",
          listenNum: 0,
          songList: [],
        },
        {
          id: 5,
          createTime: 1661864442876,
          name: "clannad",
          songImg:
            "https://y.qq.com/mediastyle/global/img/cover_playlist.png?max_age=31536000",
          listenNum: 0,
          songList: [],
        },
      ],
      toSheetShow: false, // 用来控制添加到歌单列表的展示
      toSheetSty: {
        style: {
          top: 0,
          left: 0,
        },
        origin: null
      },
    };
  },
  filters: {
    formatTime (val) {
      let secondSum = Math.round(val)
      let minute = Math.floor(secondSum / 60),
        second = secondSum % 60 >= 10 ? secondSum % 60 : `0${secondSum % 60}`
      return `0${minute}:${second}`
    }
  },
  watch: {
    // 切换播放状态
    playState(newVal) {
      if (newVal) {
        if (!this.activeMusicId) {
          const item =
            this.musicList.find((val) => val.id === 759852) ||
            this.currentList[0];
          this.funcItem(item, "play");
        } else {
          this.$nextTick(() => {
            this.$refs.music.play();
          });
        }
      } else {
        this.$refs.music.pause();
      }
    },
    // 监听音量的变化
    percentNum(newVal) {
      this.$nextTick(() => {
        this.$refs.music.volume = (newVal / 120).toFixed(2);
      });
    },
    // 监听进度的变化
    speedNum(newVal) {
      // 播放结束后根据播放策略播放下一首
      if (newVal === 850) {
        let idx = this.currentList.findIndex(
          (val) => val.id === this.activeMusicId
        );
        switch (this.currentPolicy) {
          case 0:
            idx = idx === this.currentList.length - 1 ? 0 : idx + 1;
            this.funcItem(this.currentList[idx], "play");
            break;
          case 1:
            const temp = Math.floor(Math.random() * this.currentList.length);
            // 如果随机后还是相等就加一处理
            if (idx === temp) {
              idx = idx === this.currentList.length - 1 ? 0 : idx + 1;
            } else {
              idx = temp;
            }
            this.funcItem(this.currentList[idx], "play");
            break;
          case 2:
            this.speedNum = 0;
            this.$refs.music.play();
            break;
          default:
            break;
        }
      }
    },
    // 监听活跃歌词的变化并视情况滚动歌词列表
    activeLrc(newVal) {
      this.$nextTick(() => {
        // 当滚动到中间时再开始滚动
        const idx = this.lrc.findIndex((val) => val.time === newVal);
        if (idx <= 5) {
          this.scrollHeight = 0;
          return;
        }
        // 如果高度小于了308,就证明不需要滚动
        if (this.lrcHeight <= 308) return;
        let scrollHeight = this.lrcHeight - 308;
        // 如果此时滚动距离等于了应该要滚动的距离最大值,就不滚动了
        if (this.scrollHeight === scrollHeight) return;
        this.scrollHeight = 28 * (idx - 5);
      });
    },
    // 监听播放歌曲的变化
    activeMusicId(newVal) {
      if (this.historyList.some((val) => val.id === newVal)) return;
      const item = this.currentList.find((val) => val.id === newVal);
      this.historyList.unshift(item);
    },
  },
  computed: {
    // 活跃歌曲
    activeMusic() {
      if (!this.activeMusicId) return {};
      let item = this.currentList.find(
        (val) => val.id === this.activeMusicId
      );
      // 如果当前的歌单中没有,就说明现在播放的歌曲在原来的歌单中
      if (!item) {
        item = this.originList.find((val) => val.id === this.activeMusicId)
        return item
      }
      return item;
    },
    // 控制高亮显示歌词
    activeLrc() {
      if (!this.activeMusicId) return {};
      let currentTime =
          (parseInt(this.speedNum) / 850).toFixed(2) *
          (this.activeMusic.allTime || 210),
        currentVal = {};

      this.lrc.map((val, idx, arr) => {
        let flag;
        if (idx + 1 === arr.length) {
          flag = currentTime >= val.time;
        } else {
          flag = currentTime >= val.time && currentTime < arr[idx + 1].time;
        }
        if (flag) currentVal = val;
      });

      return currentVal.time;
    },
  },
  methods: {
    /**
     * 歌曲的功能栏(播放,下载,分享)
     * @param { Object } item --- 要处理的歌曲
     * @param { String } type --- 执行的功能
     */
    funcItem(item, type) {
      switch (type) {
        case "play":
          if (this.activeMusicId === item.id && this.currentPolicy !== 2) {
            this.controlMusic("switch");
            return;
          }
          this.activeMusicId = item.id;
          this.playClick();
          break;
        case "download":
          window.open(item.src, "_blank");
        case "delete":
          const idx = this.currentList.findIndex((val) => val.id === item.id);
          this.currentList.splice(idx, 1);
        default:
          break;
      }
    },
    /**
     * 音乐控件
     * @param { String } -- type 种类
     * */
    controlMusic(type) {
      switch (type) {
        case "switch":
          this.playState = !this.playState;
          break;
        case "next":
          {
            const idx = this.currentList.findIndex(
              (val) => val.id === this.activeMusicId
            );
            this.funcItem(
              this.currentList[
                idx === this.currentList.length - 1 ? 0 : idx + 1
              ],
              "play"
            );
          }
          break;
        case "prev":
          {
            const idx = this.currentList.findIndex(
              (val) => val.id === this.activeMusicId
            );
            this.funcItem(
              this.currentList[
                idx === 0 ? this.currentList.length - 1 : idx - 1
              ],
              "play"
            );
          }
          break;
        default:
          break;
      }
    },
    // 切换播放策略
    switchPolicy() {
      this.currentPolicy === 2
        ? (this.currentPolicy = 0)
        : this.currentPolicy++;
    },
    /**
     * 进度的跳转
     * @param { String } --- volume : 音量, progress: 播放进度
     * */
    jumpProgress(type, e) {
      if (!this.activeMusicId && type === "progress") return;
      const offsetLeft = e.clientX - $(e.target).offset().left,
        music = this.$refs.music;

      if (type === "volume") {
        this.percentNum = offsetLeft;
      } else if (type === "progress") {
        this.$refs.music.removeEventListener(
          "timeupdate",
          this.handleTimeUpdate
        );
        this.speedNum = offsetLeft;
        this.$nextTick(() => {
          music.currentTime = (this.speedNum / 850).toFixed(2) * music.duration;
          this.$refs.music.addEventListener(
            "timeupdate",
            this.handleTimeUpdate,
            false
          );
        });
      }
    },
    // 播放位置更改时的绑定函数
    handleTimeUpdate() {
      const music = this.$refs.music;
      this.currentTime = music.currentTime
      this.speedNum = 850 * (music.currentTime / music.duration).toFixed(3);
    },
    // 点击播放的处理事件
    playClick() {
      let _vm = this;
      this.$nextTick(() => {
        this.originList = this.currentList
        this.playState = true;
        this.speedNum = 0;
        this.$refs.music.play();
        this.lrcHeight = this.$refs.lrc.clientHeight;
        this.$refs.music.addEventListener(
          "timeupdate",
          _vm.handleTimeUpdate,
          false
        );
        $(".blur-img").animate({ opacity: "0.2" }, 1000, function () {
          $(".blur-img").backgroundBlur(_vm.activeMusic.img);
          $(".blur-img").animate({ opacity: "1" }, 2000);
        });
      });
    },
    /**
     * 歌曲音量控件小点按下时
     * */
    volumeDown(e) {
      this.volumeClick = true;
      // 记录此时起始点的位置和已移动的距离
      this.originNum = e.clientX;
      this.alreadyNum = this.percentNum;
    },
    // 当进度条小点被按下时
    processDown(e) {
      if (!this.activeMusicId) return;
      this.processClick = true;
      // 解除事件的绑定
      this.$refs.music.removeEventListener("timeupdate", this.handleTimeUpdate);
      // 记录此时起始点的位置和已移动的距离
      this.originNum = e.clientX;
      this.alreadyNum = this.speedNum;
    },
    // 跳转到正在播放的歌单
    jumpSheet(type) {
      if (this.sheetShow && type !== "now") return;
      $(".list-main-wrap").fadeOut();
      $(".music-main-left-list").fadeIn();
      this.sheetShow = true;
      if (type === "history") {
        this.currentList = this.historyList;
      } else if (type === "now") {
        this.currentList = this.musicList;
      }
    },
    // 跳转到播放列表
    jumpList() {
      if (!this.sheetShow) return;
      $(".music-main-left-list").fadeOut();
      $(".list-main-wrap").fadeIn();
      this.sheetShow = false;
    },
    // 新增歌单
    addSongList() {
      let val = this.addListVal.trim();
      let songSheetItem = {};
      if (val.length === 0) return;
      songSheetItem.createTime = new Date().getTime();
      songSheetItem.name = val;
      songSheetItem.songImg =
        "https://y.qq.com/mediastyle/global/img/cover_playlist.png?max_age=31536000";
      songSheetItem.listenNum = 0;
      songSheetItem.songList = [];
      this.songSheetCustom.push(songSheetItem);
      this.addListShow = false;
      this.addListVal = "";
      this.$message("创建歌单成功");
    },
    // 右键点击弹出功能列表
    handleClickFunc(item, e) {
      this.toSheetSty.style["top"] = `${e.clientY + 20}px`;
      this.toSheetSty.style["left"] = `${e.clientX + 10}px`;
      this.toSheetSty.origin = item
      this.toSheetShow = true;
    },
    // 添加到对应的歌单
    toSheet (id) {
      if (id == null) {
        let musicList = [...new Set([...this.musicList, this.toSheetSty.origin])]
        // 不允许重复添加歌曲
        if (musicList.length === this.musicList.length) {
          this.$message({
            message: `我喜欢的歌单中已存在`,
            type: 'warning'
          })
        } else {
          this.musicList = musicList
          this.$message(`添加到我喜欢的歌单成功`)
        }
      } else {
        let sheet = this.songSheetCustom.find(val => val.id === id),
          sheetList = [...new Set([...sheet.songList, this.toSheetSty.origin])]
        if (sheetList.length === sheet.length) {
          this.$message({
            message: `${sheet.name}的歌单中已存在`,
            type: 'warning'
          })
        } else {
          sheet.songList = sheetList
          this.$message(`添加到${sheet.name}的歌单成功`)
        }
      }
      this.toSheetShow = false
    },
    // 跳转到自定义的歌单
    jumpCustomSheet (id) {
      let sheet = this.songSheetCustom.find(val => val.id === id)
      this.currentList = sheet.songList
      this.jumpSheet()
    }
  },
  created() {
    this.currentList = this.musicList;
  },
  mounted() {
    $(".music-main-left-list").mCustomScrollbar({
      theme: "minimal",
      advanced: {
        updateOnContentResize: true, // 数据更新后自动刷新滚动条
      },
    });
    $(".blur-img").backgroundBlur({
      // imageURL : '', // URL to the image that will be used for blurring
      blurAmount: 50, // 模糊度
      imageClass: "blured-img", // 背景区应用样式
      overlayClass: "blur-mask", // 覆盖背景区class，可用于遮罩或额外的效果
      // duration: 0, // 图片淡出时间
      endOpacity: 1, // 图像最终的不透明度
    });
    const _vm = this;
    window.onclick = function (e) {
      if (e.target.className === 'music-main') {
        _vm.toSheetShow = false
      }
    }
    window.onkeydown = function (e) {
      if (e.keyCode === 32) {
        _vm.playState = !_vm.playState
      }

      if (e.keyCode === 39 && e.ctrlKey) {
        const idx = _vm.currentList.findIndex((val) => val.id === _vm.activeMusicId);
        _vm.funcItem(_vm.currentList[idx === _vm.currentList.length - 1 ? 0 : idx + 1], "play");
      }

      if (e.keyCode === 37 && e.ctrlKey) {
        const idx = _vm.currentList.findIndex((val) => val.id === _vm.activeMusicId);
        _vm.funcItem(_vm.currentList[idx === 0 ? _vm.currentList.length - 1 : idx - 1], "play");
      }

      if (e.keyCode === 38 && e.ctrlKey) {
        let target = _vm.percentNum + 10
        if (target > 120) {
          _vm.percentNum = 120
        } else {
          _vm.percentNum = target
        }
      }

      if (e.keyCode === 40 && e.ctrlKey) {
        let target = _vm.percentNum - 10
        if (target < 0) {
          _vm.percentNum = 0
        } else {
          _vm.percentNum = target
        }
      }
    };
    window.onmousemove = function (e) {
      // 解决可能当鼠标左键没有按下时还能触发mousemove事件的bug
      if (e.buttons !== 1) {
        _vm.processClick = false
        _vm.volumeClick = false
        return;
      }
      if (!(_vm.volumeClick || _vm.processClick)) return
      const moveNum = e.clientX - _vm.originNum;
      // 处理音量的小点
      if (_vm.volumeClick) {
        if (_vm.alreadyNum + moveNum > 120 || _vm.alreadyNum + moveNum < 0)
          return
        _vm.percentNum = _vm.alreadyNum + moveNum
      }

      // 处理进度的小点
      if (_vm.processClick) {
        if (_vm.alreadyNum + moveNum > 850 || _vm.alreadyNum + moveNum < 0)
          return
        _vm.speedNum = _vm.alreadyNum + moveNum
      }
    };
    window.onmouseup = function () {
      _vm.volumeClick = false
      if (_vm.processClick) {
        _vm.processClick = false
        _vm.$refs.music.currentTime =
          (_vm.speedNum / 850) * _vm.$refs.music.duration
        _vm.$refs.music.addEventListener(
          "timeupdate",
          _vm.handleTimeUpdate,
          false
        )
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.to-sheet {
  position: fixed;
  padding: 5px;
  width: 170px;
  background: rgba(255, 255, 255);

  .to-sheet-item {
    height: 36px;
    text-align: center;
    line-height: 36px;
    font-size: 14px;
    cursor: pointer;
  }

  .to-sheet-item:hover {
    background-color: #31c27c;
    color: #fff;
  }
}
.layui-layer-shade {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 999;
}
.Inactive {
  display: none !important;
}
.playing {
  color: #31c27c !important;
}
.songlist__number {
  display: inline-block;
  transform: translateX(3px);
  background: url(assets/img/wave.gif) 0 0 no-repeat;
  height: 10px;
  box-sizing: border-box;
}

.blur-img {
  position: fixed;
  height: 100%;
  left: -10%;
  width: 120%;
  overflow: hidden;
  opacity: 1;

  .blur-mask {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    filter: alpha(opacity=30);
    -moz-opacity: 0.3;
    opacity: 0.3;
    top: 0;
    left: 0;
    overflow: hidden;
  }
}

.music {
  height: 100vh;
  width: 100%;
  background-color: #000;
  background-image: linear-gradient(200deg, #7f7280, #000000);
  overflow: hidden;
  box-sizing: border-box;

  &-header {
    padding: 10px 20px;
    height: 50px;

    &-text {
      color: #829194;
      font-size: 23px;
      cursor: pointer;
    }
  }

  &-main {
    display: flex;
    position: absolute;
    top: 50px;
    bottom: 100px;
    padding: 0px calc(50% - 600px);
    width: 1200px;

    &-left {
      position: relative;
      flex-shrink: 0;
      width: 810px;

      &-func {
        padding-top: 20px;
        margin-bottom: 20px;

        .func-item {
          display: inline-block;
          padding: 6px 25px;
          border: 1px solid rgba(150, 150, 150, 0.5);
          border-radius: 2px;
          color: #fff;
          font-size: 14px;
          opacity: 0.8;
          cursor: pointer;
        }

        .func-item:hover {
          border: 1px solid #fff;
          opacity: 1;
        }
      }

      &-list {
        position: absolute;
        width: 100%;
        color: rgba(225, 225, 225, 0.8);
        height: 500px;
        padding-right: 20px;
        overflow: hidden;

        .list-item {
          position: relative;
          display: flex;
          align-items: center;
          height: 50px;
          border-bottom: 1px solid rgba(150, 150, 150, 0.1);
          cursor: pointer;

          .item-cult,
          .item-auth {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .item-name {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-right: 35px;

            .highlight {
              color: #fff;
            }

            &-func {
              display: none;

              .item-icon {
                display: inline-block;
                margin-right: 10px;
                width: 36px;
                height: 36px;
                background-image: url(assets/img/icon_list_menu);
              }

              .item-play {
                background-position: -80px 0;
              }

              .item-play:hover {
                background-position: -120px 0;
              }

              .item-download {
                background-position: -80px -120px;
              }

              .item-download:hover {
                background-position: -120px -120px;
              }

              .item-delete {
                background-position: -80px -160px;
              }

              .item-delete:hover {
                background-position: -120px -160px;
              }
            }
          }
        }

        .list-item .item-name:hover {
          .item-name-func {
            display: flex !important;
          }
        }

        .list-head {
          padding-left: 30px;
        }
      }

      .list-main-wrap {
        position: absolute;
        width: 100%;
        padding: 0px 20px;

        .list-main {
          display: flex;
          flex-wrap: wrap;
          align-items: center;

          .list-item {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            width: 25%;
            height: 130px;
            margin-bottom: 10px;
            color: #fff;
            cursor: pointer;

            &-img {
              width: 100px;
              height: 100px;
              margin: 0px auto;
              margin-bottom: 10px;
            }

            &-text {
              width: 100px;
              text-align: center;
              font-size: 12px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }

    &-right {
      flex-wrap: wrap;
      margin-left: 120px;

      &-img {
        width: 186px;
        margin: 0px 7px;
        margin-bottom: 20px;
      }

      .lrc-wrap {
        height: 308px;
        width: 200px;
        overflow-y: hidden;

        .lrc-list {
          transition: transform 1.25s ease;
        }

        .lrc-item {
          height: 28px;
          line-height: 28px;
          color: rgba(225, 225, 225, 0.8);
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }

  &-footer {
    position: absolute;
    width: 100%;
    height: 100px;
    padding: 0px calc(50% - 600px);
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

    &-func {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 130px;

      .player-btn {
        background-image: url(assets/img/player);
      }

      .btn-prev {
        width: 19px;
        height: 20px;
        background-position: 0 -30px;
      }

      .btn-play {
        width: 19px;
        height: 29px;
      }

      .btn-next {
        width: 19px;
        height: 20px;
        background-position: 0 -52px;
      }

      .btn-order {
        background-size: 450%;
        width: 25px;
        height: 25px;
      }

      .btn-order-list {
        background-position: 0 -173px;
      }

      .btn-order-random {
        background-position: 0 -62px;
        height: 18px;
      }

      .btn-order-single {
        background-position: 0 -196px;
      }

      .btn-state-paused {
        background-position: -30px 0;
      }
    }

    &-volume,
    &-progress {
      position: relative;
      width: 120px;
      height: 20px;

      .btn-quiet {
        position: absolute;
        left: -34px;
        display: inline-block;
        width: 26px;
        height: 21px;
        background-image: url(assets/img/player);
        background-position: 0 -144px;
      }

      .btn-state-quiet {
        background-position: 0 -182px;
      }

      .volume-cur-wrap {
        position: absolute;
        top: 8px;
        height: 2px;
        overflow: hidden;

        .volume-cur {
          position: absolute;
          background-color: #fff;
          width: 120px;
          height: 2px;
          top: 1px;
          margin-top: -1px;
          border-radius: 2px;
          transition: transform 0.25s ease;
          -webkit-transition: transform 0.25s ease;
        }
      }

      .volume-bar-wrap {
        height: 14px;
        transform: translateY(2px);
      }

      .volume-bar {
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        height: 2px;
        margin-top: -1px;
        border-radius: 2px;
        background-color: #808284;
      }

      .volume-dot {
        position: absolute;
        top: 50%;
        margin-left: -5px;
        margin-top: -5px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #fff;
        transition: transform 0.25s ease;
        -webkit-transition: transform 0.25s ease;
        overflow: hidden;
      }
    }

    &-progress {
      width: 850px;

      .music-info {
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        top: -17px;
        color: hsla(0,0%,88.2%,.8);
      }

      .volume-cur-wrap {
        width: 850px;

        .volume-cur {
          width: 850px;
          left: -850px;
        }
      }
    }

    &-volume {
      width: 120px;

      .volume-cur-wrap {
        width: 120px;
      }

      .volume-cur {
        top: 1px;
        width: 120px;
        left: -120px;
      }
    }
  }

  .add-list {
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 25px 15px;
    transform: translate(-50%, -50%) scale(0);
    background-color: #fff;
    opacity: 0;
    transition: all 0.5s ease;
    z-index: 1000;

    .close {
      position: absolute;
      top: -9px;
      right: -12px;
      width: 30px;
      height: 30px;
      background: url(https://musi.llgal.xyz/plugns/layer/skin/default/icon.png)
        no-repeat;
      background-position: -149px -31px;
    }

    .close:hover {
      background-position: -180px -31px;
    }

    .add-wrap {
      display: flex;
      width: 300px;
      border: 1px solid #a7a1a1;

      .add-input {
        padding: 5px;
        height: 35px;
        width: 80%;
        color: #999;
        line-height: 35px;
      }

      .add-btn {
        width: 20%;
        border-left: 1px solid #a7a1a1;
      }
    }
  }

  .add-list.active {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    transition: all 1s ease;
  }

  .dot-move {
    box-shadow: 0 0 20px #fff;
    animation: dot-move 3s linear 2s infinite;
  }

  @keyframes dot-move {
    0% {
      box-shadow: 0 0 10px #363333;
    }
    25% {
      box-shadow: 0 0 7px #363333;
    }
    50% {
      box-shadow: 0 0 0px #fff;
    }
    100% {
      box-shadow: 0 0 10px #363636;
    }
  }
}
</style>