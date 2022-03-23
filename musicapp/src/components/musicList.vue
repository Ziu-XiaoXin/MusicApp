<template>
  <div class="musicList">
    <div class="musicList-top">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="mlist">
      <!-- Swiper -->
      <div class="swiper-container" id="musicSwiper">
        <div class="swiper-wrapper">
          <router-link
            :to="{ path: '/listvue', query: { id: item.id } }"
            class="swiper-slide"
            v-for="(item, i) in state.musicList"
            :key="i"
          >
            <img :src="item.picUrl" :alt="item.name" />
            <div class="name">{{ item.name }}</div>
            <div class="palyCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-yunhang"></use>
              </svg>
              <span>{{ changeValue(item.playCount) }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import { getMusicList } from '@/api/index.js'
import { reactive, onMounted, onUpdated } from 'vue'
/* export default {
  data() {
    return {
      musicList: []
    }
  },
  methods: {
    changeValue(num) {
      let hotRes = 0
      if (num >= 100000000) {
        hotRes = num / 100000000
        hotRes = hotRes.toFixed(2) + '亿'
      } else if (num >= 10000) {
        hotRes = num / 10000
        hotRes = hotRes.toFixed(2) + '万'
      }
      return hotRes
    }
  },

  async mounted() {
    let result = await getmusicList()
    // console.log(result);
    this.musicList = result.data.result

  },
  updated() {
    var swiper = new Swiper('#musicSwiper', {
      slidesPerView: 3,
      spaceBetween: 10
    });
  },

} */

export default {
  setup() {
    let state = reactive({ musicList: [] })
    function changeValue(num) {
      let hotRes = 0
      if (num >= 100000000) {
        hotRes = num / 100000000
        hotRes = hotRes.toFixed(2) + '亿'
      } else if (num >= 10000) {
        hotRes = num / 10000
        hotRes = hotRes.toFixed(2) + '万'
      }
      return hotRes
    };
    onMounted(async () => {
      let result = await getMusicList()
      // console.log(result);
      state.musicList = result.data.result;
      // store.commit('setPlaylist', state.musicList.tracks)
      // console.log(state.musicList.tracks);
    });
    onUpdated(() => {
      var swiper = new Swiper('#musicSwiper', {
        slidesPerView: 3,
        spaceBetween: 10
      });
    })
    return {
      state,
      changeValue
    }
  }
}
</script>

<style lang="less" scoped>
.musicList {
  width: 7.5rem;
  padding: 0 0.4rem;
  .musicList-top {
    display: flex;
    justify-content: space-between;
    height: 1rem;
    align-items: center;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid rgb(136, 136, 136);
      border-radius: 0.3rem;
      font-size: 0.24rem;
      color: rgb(136, 136, 136);
      height: 0.5rem;
      line-height: 0.45rem;
      width: 1.4rem;
      text-align: center;
    }
  }
  .mlist {
    .swiper-container {
      width: 100%;
      height: 3rem;
      .swiper-slide {
        display: flex;
        flex-direction: column;
        position: relative;
        img {
          width: 100%;
          height: auto;
          border-radius: 0.3rem;
        }
        .name {
          height: 0.8rem;
          width: 100%;
          font-size: 0.24rem;
          line-height: 0.4rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .palyCount {
          position: absolute;
          right: 0.1rem;
          top: 0.1rem;
          font-size: 0.24rem;
          color: rgb(231, 231, 231);
          display: flex;
          align-items: center;
          .icon {
            height: 0.4rem;
            width: 0.4rem;
            fill: rgb(231, 231, 231);
          }
        }
      }
    }
  }
}
</style>