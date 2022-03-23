<template>
  <div class="playMusic">
    <div
      class="bg"
      :style="{ backgroundImage: `url(${playDetails.al.picUrl})` }"
    ></div>
    <div class="playTop">
      <div class="back">
        <svg class="icon" aria-hidden="true" @click="$emit('back')">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
      </div>
      <div class="center">
        <div class="title">
          <marquee behavior="scroll" direction="left">
            {{ playDetails.al.name }}
          </marquee>
        </div>
      </div>
      <div class="share">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
      </div>
    </div>
    <!-- 切换界面 -->
    <div class="playContent" v-show="!isLyric" @click="isLyric = !isLyric">
      <img
        class="needle"
        :class="{ active: !paused }"
        src="@/assets/img/needle-ab.png"
        alt=""
      />
      <img class="disc" src="@/assets/img/disc.png" alt="" />
      <img class="playImg" :src="playDetails.al.picUrl" alt="" />
    </div>

    <!-- 切换界面 -->
    <div
      class="playLyric"
      v-show="isLyric"
      ref="playLyric"
      @click="isLyric = !isLyric"
    >
      <p
        :class="{
          active:
            currentTime * 960 >= item.pre && currentTime * 960 < item.time,
        }"
        class="fontSet"
        v-for="(item, i) in $store.getters.lyricList"
        :key="i"
      >
        {{ item.lyric }}
      </p>
    </div>
    <div class="progress"></div>
    <div class="playFooter">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xunhuan"></use>
      </svg>
      <!-- 上一首 -->
      <svg class="icon" aria-hidden="true" @click="goPlay(-1)">
        <use xlink:href="#icon-48shangyishou"></use>
      </svg>
      <svg v-if="paused" class="icon play" aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg v-else class="icon play" aria-hidden="true" @click="play">
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <!-- 下一首 -->
      <svg class="icon" aria-hidden="true" @click="goPlay(1)">
        <use xlink:href="#icon-49xiayishou"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-31liebiao"></use>
      </svg>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  props: ['playDetails', 'paused', 'play'],
  data() {
    return {
      isLyric: false
    }
  },
  computed: {
    ...mapState(['lyric', 'currentTime', 'playlist', 'playCurrentIndex']),

  },
  watch: {
    currentTime: function () {
      let p = document.querySelector('p.active');
      let offsetTop = p.offsetTop;
      this.$refs.playLyric.scrollTop = p.offsetTop - 170

      //   let h = this.$refs.playLyric.offsetHight;
      //   if (offsetTop > h) {
      //     this.$refs.playLyric.scrollTop = this.$refs.playLyric.scrollTop + (offsetTop - h / 2)
      //   }
    }
  },
  methods: {
    goPlay(num) {
      //   console.log(num);
      //   console.log(this.playlist);
      //   console.log(this.playCurrentIndex);

      let index = this.playCurrentIndex + num
      if (index < 0) {
        index = this.playlist.length - 1;
      } else if (index == this.playlist.length) {
        index = 0
      }
      this.$store.commit('setPlayIndex', index)
    }
  }
}
</script>

<style lang="less" scoped>
.playMusic {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-size: auto 100%;
    background-position: center;
    filter: blur(30px);
  }
  .playTop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 7.5rem;
    height: 1.2rem;
    position: absolute;
    left: 0;
    top: 0;
    color: #fff;
    padding: 0 0.4rem;
    .icon {
      fill: #fff;
      width: 0.6rem;
      height: 0.6rem;
    }
    marquee {
      width: 3rem;
      flex: 1;
      font-size: 0.4rem;
    }
  }
  .playContent {
    position: absolute;
    width: 7.5rem;
    height: 7.5rem;
    left: 0;
    top: 1.5rem;
    .needle.active {
      width: 1.6rem;
      height: auto;
      position: absolute;
      left: 4rem;
      transform-origin: 0.3rem 0;
      transform: rotate(10deg);
      transition: all 1s;
      z-index: 12;
    }
    .needle {
      width: 1.6rem;
      height: auto;
      position: absolute;
      left: 4rem;
      transform-origin: 0.3rem 0;
      transition: all 1s;
      transform: rotate(-20deg);
      z-index: 12;
    }
    .disc {
      width: 5rem;
      height: auto;
      position: absolute;
      left: calc(50% - 2.75rem);
      top: 1.4rem;
      z-index: 10;
    }
    .playImg {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 1.5rem;
      position: absolute;
      left: calc(50% - 1.8rem);
      top: 2.4rem;
    }
  }
  .playFooter {
    width: 7.5rem;
    height: 1.5rem;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.4rem;
    margin-bottom: 0.5rem;
    .icon {
      fill: #fff;
      width: 0.5rem;
      height: 0.5rem;
    }
    .play.icon {
      width: 1rem;
      height: 1rem;
    }
  }
  .playLyric {
    position: absolute;
    width: 7.5rem;
    height: 9rem;
    left: 0;
    top: 1.4rem;
    overflow: scroll;
    text-align: center;
    color: #fff;
    font-size: 0.33rem;
    z-index: 13;
    .active {
      color: orangered;
      font-size: 0.42rem;
      font-weight: 900;
      transition: all 2s;
    }
    .fontSet {
      margin-top: 0.3rem;
      letter-spacing: 0.05rem;
    }
  }
}
</style>