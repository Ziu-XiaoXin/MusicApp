<template>
  <div>
    <section class="aui-flexView">
      <header class="aui-navBar aui-navBar-fixed">
        <svg class="icon" aria-hidden="true" @click="$router.push('/')">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
      </header>
      <section class="aui-scrollView">
        <div class="aui-chang-box"></div>
        <div class="aui-chang-list">
          <div class="aui-user-img">
            <img
              style="width: 100%; height: 100%"
              :src="$store.state.user.userDetails.profile.avatarUrl"
              alt=""
            />
          </div>
          <div class="aui-user-text">
            <h1>{{ $store.state.user.userDetails.profile.nickname }}</h1>
            <span v-if="$store.state.user.userDetails.profile.vipType == 0"
              ><i class="icon icon-vip"></i>您还未开通VIP</span
            >
            <button>开通会员</button>
          </div>
          <div class="aui-jf">积分50</div>
        </div>
        <div class="aui-palace aui-palace-one">
          <a href="javascript:;" class="aui-palace-grid">
            <div class="aui-palace-grid-icon">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yunpanshangchuan"></use>
              </svg>
              <span class="text">云盘上传</span>
            </div>
          </a>
          <a href="javascript:;" class="aui-palace-grid">
            <div class="aui-palace-grid-icon">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-gouwu"></use>
              </svg>
              <span class="text">选购中心</span>
            </div>
          </a>
          <a href="javascript:;" class="aui-palace-grid">
            <div class="aui-palace-grid-icon">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofang3"></use>
              </svg>
              <span class="text">歌曲中心</span>
            </div>
          </a>
          <a href="javascript:;" class="aui-palace-grid">
            <div class="aui-palace-grid-icon">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yinle"></use>
              </svg>
              <span class="text">我的收藏</span>
            </div>
          </a>
        </div>
        <div class="divHeight"></div>
        <div class="aui-list-item">
          <a href="javascript:;" class="aui-flex b-line">
            <div class="aui-cou-img">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xieyi"></use>
              </svg>
            </div>
            <div class="aui-flex-box">
              <p>用户协议</p>
            </div>
          </a>
          <a href="javascript:;" class="aui-flex b-line">
            <div class="aui-cou-img">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tubiaozhizuomoban-"></use>
              </svg>
            </div>
            <div class="aui-flex-box">
              <p>常见问题</p>
            </div>
          </a>
          <a href="javascript:;" class="aui-flex b-line">
            <div class="aui-cou-img">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-kefu"></use>
              </svg>
            </div>
            <div class="aui-flex-box">
              <p>联系客服</p>
            </div>
          </a>
          <div class="divHeight b-line"></div>
          <a href="javascript:;" class="aui-flex b-line">
            <div class="aui-cou-img">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-tuichudenglu"></use>
              </svg>
            </div>
            <div class="aui-flex-box" @click="tologinOut">
              <p>退出登录</p>
            </div>
          </a>
        </div>
        <div class="divHeight b-line"></div>
      </section>
    </section>
    <login-out v-show="isLoginOut"></login-out>
  </div>
</template>

<script>
import loginOut from '@/components/loginOut.vue'
export default {
  components: { loginOut },
  data() {
    return {
      isLoginOut: false
    }
  },
  methods: {
    tologinOut() {
      this.isLoginOut = true
    }
  }
}
</script>


<style lang="less" scoped>
a {
  text-decoration: none;
  color: #08acee;
}

button {
  outline: 0;
}

img {
  border: 0;
}

button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font: inherit;
  color: inherit;
  outline: none;
}

li {
  list-style: none;
}

a {
  color: #666;
}

.clearfix::after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}

.clearfix {
}

.divHeight {
  width: 100%;
  height: 10px;
  background: #f5f5f5;
  position: relative;
  overflow: hidden;
}

.r-line {
  position: relative;
}

.r-line:after {
  content: "";
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  height: 100%;
  border-right: 1px solid #d9d9d9;
  -webkit-transform: scaleX(0.5);
  transform: scaleX(0.5);
  -webkit-transform-origin: 100% 0;
  transform-origin: 100% 0;
}

.b-line {
  position: relative;
}

.b-line:after {
  content: "";
  position: absolute;
  z-index: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #e2e2e2;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}

.aui-arrow {
  position: relative;
  padding-right: 0.2rem;
}

.aui-arrow span {
  font-size: 0.2rem;
  color: #9b9b9b;
}

.aui-arrow:after {
  content: " ";
  display: inline-block;
  height: 6px;
  width: 6px;
  border-width: 2px 2px 0 0;
  border-color: #848484;
  border-style: solid;
  -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  position: relative;
  top: -2px;
  position: absolute;
  top: 50%;
  margin-top: -4px;
  right: 2px;
  border-radius: 1px;
}

.aui-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  padding: 15px;
  position: relative;
}

.aui-flex-box {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  min-width: 0;
  font-size: 14px;
  color: #333;
}

/* 蹇呰甯冨眬鏍峰紡css */

.aui-flexView {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.aui-scrollView {
  width: 100%;
  height: 100%;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
}

.aui-navBar {
  height: 44px;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  z-index: 0;
  background-color: #fc2c02;
  .icon {
    width: 0.65rem;
    height: 0.65rem;
    margin: 0.25rem;
    fill: #fff;
  }
}

.aui-navBar-item:first-child {
  -webkit-box-ordinal-group: 2;
  -webkit-order: 1;
  -ms-flex-order: 1;
  order: 1;
  margin-right: -25%;
  font-size: 0.3rem;
  font-weight: bold;
}

.aui-navBar-item:last-child {
  -webkit-box-ordinal-group: 4;
  -webkit-order: 3;
  -ms-flex-order: 3;
  order: 3;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.aui-center {
  -webkit-box-ordinal-group: 3;
  -webkit-order: 2;
  -ms-flex-order: 2;
  order: 2;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  height: 44px;
  width: 50%;
  margin-left: 25%;
}

.aui-center-title {
  text-align: center;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  font-size: 0.3rem;
  color: #333;
}

.icon {
  width: 20px;
  height: 20px;
  display: block;
  border: none;
  float: left;
  background-size: 20px;
  background-repeat: no-repeat;
}

.m-slider {
  overflow-x: hidden;
  width: 100%;
  position: relative;
}

.slider-wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100%;
  -webkit-transform: translate3d(0px, 0px, 0px);
  transform: translate3d(0px, 0px, 0px);
  position: relative;
  z-index: 1;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
}

.slider-item {
  width: 100%;
  height: 100%;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  background: #f6f6f6;
}

.slider-item img {
  width: 100%;
  height: auto;
  display: block;
  border: none;
}

.slider-pagination {
  text-align: right;
  position: absolute;
  width: 100%;
  z-index: 2;
  right: 0;
  bottom: 10px;
  pointer-events: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
  -webkit-align-items: flex-end;
  -ms-flex-align: end;
  align-items: flex-end;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.slider-pagination > .slider-pagination-item {
  margin: 0 0.25rem;
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0.4);
}

.slider-pagination > .slider-pagination-item.slider-pagination-item-active {
  background-color: #fff;
  border-radius: 100%;
}

.tab-nav {
  height: 40px;
  line-height: 40px;
  display: block;
  position: relative;
  background: #fff;
  z-index: 1;
  width: 100%;
  margin: 0 auto;
}

.tab-nav-item {
  height: 40px;
  line-height: 40px;
  position: relative;
  text-align: center;
  color: #585858;
  font-size: 0.3rem;
  display: block;
  float: left;
  width: 20%;
}

.tab-nav-item.tab-active {
  /* background-color: #51bd03; */
}

.tab-nav-item.tab-active a {
  color: #ff1767;
  font-size: 0.2rem;
}

.tab-nav-item a {
  display: inherit;
  font-size: 0.2rem;
  color: #666;
}

.tab-panel {
  position: relative;
  overflow: hidden;
}

.tab-panel .tab-panel-item {
  width: 100%;
  position: absolute;
  top: 0;
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
}

.tab-panel .tab-panel-item.tab-active ~ .tab-panel-item {
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}

.tab-panel .tab-panel-item.tab-active {
  position: relative;
  -webkit-transition: -webkit-transform 0.15s;
  transition: -webkit-transform 0.15s;
  transition: transform 0.15s;
  transition: transform 0.15s, -webkit-transform 0.15s;
  -webkit-transform: translateX(0);
  transform: translateX(0);
}

.tab-nav-item.tab-active:before {
  content: "";
  width: 70%;
  height: 3px;
  position: absolute;
  left: 50%;
  bottom: 0;
  margin-left: -35%;
  z-index: 4;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#ff6143),
    to(#ff1767)
  );
  background-image: -webkit-linear-gradient(left, #ff6143, #ff1767);
  background-image: -moz-linear-gradient(left, #ff6143, #ff1767);
  background-image: linear-gradient(to right, #ff6143, #ff1767);
  background-color: #ff6143;
}

.aui-palace {
  padding: 0.1rem 0;
  position: relative;
  overflow: hidden;
}

.aui-palace-grid {
  position: relative;
  float: left;
  padding: 1px;
  width: 20%;
  box-sizing: border-box;
  margin: 5px 0;
}

.aui-palace-grid-icon {
  padding-left: 0.3rem;
  .icon {
    margin-right: 0.5rem;
    width: 0.8rem;
    height: 0.8rem;
    margin-bottom: 0.1rem;
    float: right;
  }
  .text {
    float: left;
  }
}

.m-actionsheet {
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #efeff4;
  -webkit-transform: translate(0, 100%);
  transform: translate(0, 100%);
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}

.mask-black {
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 500;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 998;
}

.actionsheet-action {
  display: block;
  margin-top: 0.15rem;
  font-size: 0.28rem;
  color: #555;
  height: 0.3rem;
  line-height: 0.3rem;
  background-color: #fff;
}

.m-actionsheet {
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 10005;
  background-color: #ffffff;
  -webkit-transform: translate(0, 100%);
  transform: translate(0, 100%);
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}

.actionsheet-toggle {
  -webkit-transform: translate(0, 0);
  transform: translate(0, 0);
}

.actionsheet-item {
  display: block;
  position: relative;
  font-size: 0.2rem;
  color: #555;
  height: 0.7rem;
  line-height: 0.7rem;
  background-color: #fff;
}

.actionsheet-item {
  display: block;
  position: relative;
  font-size: 0.2rem;
  color: #555;
  height: 0.7rem;
  line-height: 0.7rem;
  background-color: #fff;
}

.aui-coll-cancel a {
  height: 45px;
  line-height: 45px;
  font-size: 12px;
  background: #f9f9f9;
  display: block;
  text-align: center;
  width: 100%;
}

.aui-coll-share-img {
  width: 38px;
  height: 38px;
  margin: 0 auto;
}

.aui-coll-share-img img {
  width: 100%;
  height: auto;
  display: block;
  border: none;
}

.aui-coll-share-box {
  position: relative;
  overflow: hidden;
  padding: 10px 0;
}

.aui-coll-cancel a {
  height: 45px;
  line-height: 45px;
  font-size: 12px;
  background: #f9f9f9;
  display: block;
  text-align: center;
  width: 100%;
}

.aui-coll-share-item {
  position: relative;
  float: left;
  padding: 8px 10px;
  width: 33.333%;
  box-sizing: border-box;
  font-size: 12px;
  height: 85px;
}

.aui-rule {
  position: absolute;
  right: 0;
  top: 1rem;
  background: #54ca9a;
  border-radius: 50px 0 0 50px;
  font-size: 0.2rem;
  padding: 0.2rem 0.2rem;
  color: #fff;
}

.aui-chang-box {
  width: 100%;
  position: relative;
  background-color: #fc2c02;
  background: -webkit-linear-gradient(#fc2c02, #fc2c02); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#fc2c02, #fc2c02); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#fc2c02, #fc2c02); /* Firefox 3.6 - 15 */
  background: linear-gradient(#fc2c02, #fc2c02);
  height: 2rem;
}

.aui-chang-list {
  top: 0.28rem;
  width: 92%;
  margin: -2rem auto;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 15px #e7e7e7;
  position: relative;
  z-index: 0;
  padding-bottom: 1rem;
}

.aui-chang-list:after {
  content: "";
  position: absolute;
  border-radius: 5px;
  z-index: -1px;
  top: 0;
  left: 0;
  width: 120px;
  height: 180px;
  background-size: 120px;
  background-repeat: no-repeat;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAAEeCAYAAAA6ttGoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUZEMzI4MjNCREVFMTFFOUIyM0VFRTc5QUZFNURDNTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUZEMzI4MjRCREVFMTFFOUIyM0VFRTc5QUZFNURDNTAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRkM5MjQxMkJERUQxMUU5QjIzRUVFNzlBRkU1REM1MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RkQzMjgyMkJERUUxMUU5QjIzRUVFNzlBRkU1REM1MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pn7D9+4AAA1tSURBVHja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");
}

.aui-user-img {
  width: 50px;
  height: 50px;
  position: absolute;
  left: 50%;
  margin-left: -25px;
  top: -0.2rem;
  border-radius: 100%;
  overflow: hidden;
  box-shadow: 0 3px 9px #e7e7e7;
}

.icon-vip {
  background-image: url("data:image/png;base64,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");
}

.aui-user-text {
  padding: 1rem 0 0;
  text-align: center;
  position: relative;
  z-index: 3;
}

.aui-user-text span {
  width: 42%;
  margin: 0 auto 0.2rem;
  display: block;
  font-size: 0.3rem;
}

.aui-user-text h1 {
  color: #333;
  font-size: 0.35rem;
  margin-bottom: 0.2rem;
}

.aui-user-text span i {
  margin-top: -2px;
}

.aui-user-text button {
  background: none;
  border: 1px solid #fc2c02;
  font-size: 0.3rem;
  font-weight: 400;
  color: #fc2c02;
  border-radius: 22px;
  padding: 0.1rem 0.1rem;
}

.aui-chang-list .aui-jf {
  background: #ffb710;
  color: #fff;
  font-size: 0.25rem;
  font-weight: normal;
  border-radius: 22px;
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  padding: 0.12rem 0.2rem;
  box-shadow: 0 3px 9px #fbe4b0;
}

.aui-palace-one {
  top: 0.2rem;
  clear: both;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 0.3rem;
}

.aui-palace-one .aui-palace-grid {
  width: 25%;
}

.aui-cou-img {
  width: 20px;
  height: 20px;
  margin-right: 0.1rem;
}

.aui-cou-img img {
  width: 20px;
  height: 20px;
  display: block;
  border: none;
}

.aui-footer {
  width: 100%;
  position: relative;
  z-index: 100;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 7px 5px 7px 5px;
  background: #ffffff;
}

.aui-footer:after {
  content: "";
  position: absolute;
  z-index: 0;
  top: -1px;
  left: 0;
  width: 100%;
  height: 1px;
  border-bottom: 1px solid #d9d9d9;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
}
.aui-tabBar-item {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  color: #979797;
}

.aui-tabBar-item-text {
  display: inline-block;
  font-size: 0.25rem;
  color: #818085;
  padding-top: 2px;
}

.aui-tabBar-item-active .aui-tabBar-item-text {
  color: #22c2b6;
}

.icon-credit {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUZEMzI4MjdCREVFMTFFOUIyM0VFRTc5QUZFNURDNTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUZEMzI4MjhCREVFMTFFOUIyM0VFRTc5QUZFNURDNTAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5RkQzMjgyNUJERUUxMUU5QjIzRUVFNzlBRkU1REM1MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5RkQzMjgyNkJERUUxMUU5QjIzRUVFNzlBRkU1REM1MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhWla6MAAAOgSURBVHja7JtNaBNBFMdn26SaoC20IEqDHyBU9KJYexW9FbRUqII3PXjTgz1YpB6toD3oQS9a0It6ELUYelL0pFJbQT3YFgoqSSlqe0mhtR82vte+0ThmN7OZ2U1m4oM/ZHcm+94vs/N23u7GyWazrJIsEoaTsbExX/2bmpoCi6WqBD/yYdBz0AwJPx8Ky3nYwBdBT0AHQOtI+DlJbVYB4yh2e7R30+hbA9wp0eesTcDNmvoYl7S8zLEJeFiiz5BNwFc19TEGGC89PR7tPdTHqjl8wWV/m0eblUkrGZYjJ8zigdbU+Rw6Qa6fpYH9LvolLRvG5cjtByz2lK4BHQPdA30CzROIjNx+BBlhsTFCfo9SHIGXh0dAV0DbSzDXsdjYQToOGgd1gR4FkbSqQZfp4KWAzWcYx0OKq1r3CF8CnSvTGxk8ri5dI9xRxrC50B06gGvCWPJpsmuFEpkMMGbDhCHAjXT1UAJuZ2ZZuyrwPsOAm1WBNxoGvEkVeI1hwMpJyyqrOGBndHS0mOqm7Ln+j7AL8AnQGyr3Bg1nGySOIeL6p3g4BbqZs33fcGCMv4Wuy7dBUdAtPofXUm3ZSJ1/gDZQwW3qHF4P+gqK0b4JLCf5Kd2WA4v2lGBNNoz/mbDObuPArULnYWaHiRytHHiP0PDFEuDPwvZuDrxZaMhYAixOyy0cuE5oiFsCLHLUceDZPIW0DSZyzPLr8He2eguU266Ced9xWENDA6utrWWRSIQtLS2xTCbDpqenma6nGRp87BS2v3Hgj6BtOQ37PZdnVVUskUiwWCz2e180Gl0JLh6Ps3Q6zZaXl9WWgHp8iBwj/JR+JU5uzGhuR6mvr/8rkFzD/diuahp8YPxbhX2vOfBAni+0uB0JTzEvK9QuYxp85It/gAO/B72gJSWO9klQn9uRcD55WaF2GdPgo484XhIX8r3L/dZB2WAweeB88mpXNQ0+cILfIanVw5gpVdpL6UPm+XBWJoNym5ubCyxL+/Dh+oBdZrLNUKn151wBR6lUKtDrsIKPBc+5L+F7UgReGXZwODU1taKgrEgfk35u8eSzD4aXhL6B+w0D7lcFfgBKGwI7QfEqAWMS6DQEGF8/nlcF5qPcW+awvYVG1+/C4zzoepnC3qD4mE7gn6AzbPU9ivEyAcU48A2F0xRf4TV6EU7wNaEkOcJ3tvbSnYVoCICLlJjegh7TKbzgqygp0jE6uUsyypxK+2daxT09/CXAAAMtMZRyEV1SAAAAAElFTkSuQmCC");
}

.aui-footer-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 49;
}
</style>