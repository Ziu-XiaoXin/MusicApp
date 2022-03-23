<template>
  <div class="playController">
    <div class="left" @click="bgShow = !bgShow">
      <img :src="playlist[playCurrentIndex].al.picUrl" alt="" />
      <div class="content">
        <div class="title">
          <marquee behavior="scroll" direction="left">
            {{ playlist[playCurrentIndex].al.name }}
          </marquee>
        </div>
        <div class="tips">横滑切换歌曲</div>
      </div>
    </div>
    <div class="right">
      <svg v-show="paused" class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-bofang1"></use>
      </svg>
      <svg v-show="!paused" class="icon" aria-hidden="true" @click="play">
        <use xlink:href="#icon-24gl-pauseCircle"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-24gl-playlistMusic"></use>
      </svg>
    </div>
    <play-music
      :play="play"
      :paused="paused"
      @back="bgShow = !bgShow"
      :playDetails="playlist[playCurrentIndex]"
      v-show="bgShow"
    ></play-music>
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3`"
    ></audio>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import playMusic from '@/components/playMusic.vue'

export default {
  components: { playMusic },
  data() {
    return {
      paused: true,
      bgShow: false
    }

  },
  computed: {
    ...mapState(['playlist', 'playCurrentIndex'])
  },
  updated() {
    // console.log(this.playlist[this.playCurrentIndex]);
    this.$store.dispatch('reqLyric', { id: this.playlist[this.playCurrentIndex].id });
  },
  mounted() {
    // console.log(this.$refs.audio);
    this.$store.dispatch('reqLyric', { id: this.playlist[this.playCurrentIndex].id });
  },
  methods: {
    play() {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.paused = false;
        this.updateTime()
      } else {
        this.$refs.audio.pause();
        this.paused = true;
        clearInterval(this.$store.state.id)
      }
    },

    updateTime() {
      this.$store.state.id = setInterval(() => {
        this.$store.commit('setCurrentTime', this.$refs.audio.currentTime)
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.playController {
  height: 1.2rem;
  width: 7.5rem;
  background-color: #fff;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  .left {
    display: flex;
    padding: 0 0.2rem;
    img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 0.4rem;
    }
    .content {
      padding: 0 0.2rem;
      .title {
        width: 4rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      .tips {
        font-size: 0.2rem;
        color: #999;
      }
    }
  }
  .right {
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      margin: 0 0.2rem;
    }
  }
}
</style>