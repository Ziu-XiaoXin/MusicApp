<template>
  <div class="loginOut">
    <div class="bg"></div>
    <div class="checkOut">
      <div class="top"><span class="title">确定注销</span></div>
      <div class="ask">
        <span class="text">确定注销当前账号？</span>
      </div>
      <div class="fotter">
        <button class="btn" @click="$router.push('/')">取消</button>
        <button class="btn" @click="logOut">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      window.sessionStorage.clear();
      window.localStorage.clear();
      this.$router.push('/login');
    }
  }
}
</script>


<style lang="less" scoped>
.loginOut {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(253, 251, 251, 0.801);
    opacity: 0.8;
    background-size: auto 100%;
    background-position: center;
  }
  .checkOut {
    width: 6rem;
    height: 4rem;
    position: absolute;
    top: calc(50% - 2rem);
    left: calc(50% - 3rem);
    background: rgb(241, 236, 236);
    border-radius: 0.3rem;
    .top {
      height: 1rem;
      width: 100%;
      border-bottom: 1px solid #ccc;
      line-height: 1rem;
      .title {
        padding-left: calc(50% - 1rem);
        font-size: 0.45rem;
      }
    }
    .ask {
      height: 1rem;
      width: 100%;
      margin-top: 0.6rem;
      margin-left: 0.3rem;
      .text {
        font-size: 0.35rem;
      }
    }
    .fotter {
      margin-top: 0.2rem;
      .btn {
        height: 0.8rem;
        width: 2.6rem;
        margin: 0.2rem;
        background-color: #fff;
        border-radius: 0.1rem;
        border: 0;
        outline: none;
      }
      .btn:hover {
        background-color: skyblue;
      }
    }
  }
}
</style>