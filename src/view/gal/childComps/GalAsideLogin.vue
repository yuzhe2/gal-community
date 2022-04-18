<template>
  <div class="login-panel">
    <div class="login-panel__header">
      <p
        class="login-panel__header__text"
        v-text="loginState ? '欢迎您' : '请登录'"
      ></p>
    </div>
    <div class="login-panel__main">
      <div v-if="loginState" class="login-panel--login-complete">
        <div class="login-panel--login-complete__user">
          <a href="javascript::" class="login-panel--login-complete__user--img">
            <img
              :src="loginImg"
              class="login-panel--login-complete__user--img__context"
            />
          </a>
          <a
            href="javascript:;"
            class="login-panel--login-complete__user--name"
          >
            愚者
          </a>
        </div>
        <button @click="logout" class="login-panel--login-complete__quit">
          退出登录
        </button>
      </div>
      <div v-else class="login-panel--login-incomplete">
        <div class="login-panel--login-incomplete__main">
          <form
            action="#"
            method="post"
            autocomplete="off"
            class="login-pane l--login-incomplete__main"
            @submit.prevent="login"
          >
            <div class="login-panel--login-incomplete__user-info">
              <div class="login-panel--login-incomplete__username">
                <div class="login-panel--login-incomplete__username__icon">
                  <i class="fa fa-user"></i>
                </div>
                <input
                  type="text"
                  name="username"
                  v-model="username"
                  class="login-panel--login-incomplete__username__input"
                />
              </div>
              <div class="login-panel--login-incomplete__password">
                <div class="login-panel--login-incomplete__password__icon">
                  <i class="fa fa-lock"></i>
                </div>
                <input
                  type="text"
                  name="password"
                  v-model="password"
                  class="login-panel--login-incomplete__password__input"
                />
              </div>
            </div>
            <div class="login-panel--login-incomplete__options">
              <label for="remember">
                <input type="checkbox" id="remember" v-model="isRemember" />
                <span class="login-panel--login-incomplete__options__remember"
                  >记住我</span
                >
              </label>
              <a
                href="javascript:;"
                class="login-panel--login-incomplete__options__forget"
              >
                忘记密码?
              </a>
            </div>
            <div class="login-panel--login-incomplete__function">
              <button
                class="login-panel--login-incomplete__function--login"
                type="submit"
              >
                登录
              </button>
              <a
                href="javascript:;"
                class="login-panel--login-incomplete__function--register"
              >
                注册
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalAsideLogin",
  data() {
    return {
      loginImg: require("assets/img/login"),
      loginState: false,
      isRemember: false,
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.loginState = true;
      this.remember();
    },
    logout() {
      this.loginState = false;
    },
    remember() {
      if (this.isRemember) {
        localStorage.setItem("username", this.username);
        localStorage.setItem("password", this.password);
        localStorage.setItem("isRm", "Y");
      } else {
        localStorage.setItem("username", '');
        localStorage.setItem("password", '');
        localStorage.setItem("isRm", '');
      }
    },
  getRemember() {
    if (localStorage.getItem('isRm') === 'Y') {
      this.username = localStorage.getItem('username') || '';
      this.password = localStorage.getItem('password') || '';
      this.isRemember = true;
    }
  }
  },
  mounted() {
    this.getRemember();
  }
};
</script>

<style lang="scss">
.login-panel {
  width: 360px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0px 5px #c2c2c2;
  transition: all 0.5s ease-in-out;
}

.login-panel:hover {
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 0px 50px black;
}

.login-panel__header {
  padding: 8px 15px;
  background-color: rgba(10, 10, 0, 0.7);
  color: #fff;
  font-size: 14px;
}

.login-panel__main {
  padding: 30px 20px;
  background-color: rgba(230, 238, 232, 0.5);
  transition: all 0.3s ease-in-out;
}

.login-panel--login-incomplete__username,
.login-panel--login-incomplete__password {
  position: relative;
  display: table;
  width: 100%;
  height: 34px;
  margin-bottom: 15px;
  border-radius: 4px;
}

.login-panel--login-incomplete__username__icon,
.login-panel--login-incomplete__password__icon {
  display: inline-block;
  width: 43px;
  height: 34px;
  padding: 9px 16px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: #d9534f;
  color: #fff;
  vertical-align: middle;
}

.login-panel--login-incomplete__username__input,
.login-panel--login-incomplete__password__input {
  width: calc(100% - 43px);
  height: 34px;
  padding: 10px 5px;
  border: 1px solid #f89693;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background-color: transparent;
  box-shadow: 0px 0px 8px rgba(238, 88, 83, 0.6);
  vertical-align: middle;
}

.login-panel--login-incomplete__options__remember {
  font-size: 14px;
  color: #25292f;
  vertical-align: 2px;
  font-weight: bold;
  user-select: none;
}

.login-panel--login-incomplete__options__forget {
  float: right;
  color: #3d4450;
  font-weight: bold;
  font-size: 14px;
}

.login-panel--login-incomplete__function {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.login-panel--login-incomplete__function--login,
.login-panel--login-incomplete__function--register {
  width: 48%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: rgba(10, 10, 0, 0.7);
  color: #fff;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
}

.login-panel--login-incomplete__function--login:hover,
.login-panel--login-incomplete__function--register:hover {
  background-color: #d9534f;
  transition: all 0.3s ease-in-out;
}

.login-panel--login-complete {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  overflow: hidden;
}

.login-panel--login-complete__user {
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 39px;
}

.login-panel--login-complete__user--img {
  display: block;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  overflow: hidden;
}

.login-panel--login-complete__user--name {
  margin-left: 20px;
  color: #3d4450;
}

.login-panel--login-complete__quit {
  width: 74px;
  height: 32px;
  border-radius: 4px;
  background-color: rgba(10, 10, 0, 0.7);
  color: #fff;
  cursor: pointer;
}

.login-panel--login-complete__quit:hover {
  background-color: #d9534f;
  transition: all 0.3s ease-in-out;
}
</style>
