<template>
  <div class="playList">
    <div class="playlist-top">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <div class="text">
          <div class="title">播放全部</div>
          <div class="num">(共{{ playlist.tracks.length }}首)</div>
        </div>
      </div>
      <div class="btn">收藏({{ changeValue(playlist.subscribedCount) }})</div>
    </div>
    <div class="list">
      <div class="playItem" v-for="(item, i) in playlist.tracks" :key="i">
        <div class="leftItem">
          <div class="index">{{ i + 1 }}</div>
          <div class="contentItem">
            <div class="title">{{ item.name }}</div>
            <div class="author">
              <span
                class="tag"
                v-for="(tag, index) in playlist.tags"
                :key="index"
                >{{ tag }}
              </span>
            </div>
          </div>
        </div>
        <div class="rightItem">
          <svg class="icon" aria-hidden="true" @click="setPlayIndex(i)">
            <use xlink:href="#icon-bofang2"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gengduo-shuxiang"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: ['playlist'],
  setup() {
    function changeValue(num) {
      let hotRes = 0
      if (num >= 100000000) {
        hotRes = num / 100000000
        hotRes = hotRes.toFixed(2) + '亿'
      } else if (num >= 10000) {
        hotRes = num / 10000
        hotRes = hotRes.toFixed(2) + '万'
      } else if (num >= 1000) {
        hotRes = num / 1000
        hotRes = hotRes.toFixed(2) + 'k'
      } else {
        hotRes = hotRes
      }
      return hotRes
    };

    return {
      changeValue,
      ...mapMutations(['setPlayIndex'])
    }
  }

}
</script>

<style lang="less" scoped>
.playList {
  width: 7.5rem;
  padding: 0 0.4rem;
  background-color: #fff;
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  margin-top: 1.6rem;
  position: relative;
  bottom: 1.2rem;
  .playlist-top {
    display: flex;
    justify-content: space-around;
    height: 1rem;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      .icon {
        width: 0.4rem;
        height: 0.4rem;
      }
      .title {
        font-size: 0.4rem;
        font-weight: 900;
      }
      .num {
        font-size: 0.3rem;
        color: #666;
      }
      .text {
        display: flex;
        align-items: center;
        margin-left: 0.4rem;
      }
    }
    .btn {
      font-size: 0.3rem;
      color: #fff;
      background-color: orangered;
      line-height: 0.6rem;
      padding: 0.1rem;
      display: flex;
      align-items: center;
      border-radius: 0.4rem;
      margin-left: 0.8rem;
    }
  }
  .list {
    .playItem {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 1.2rem;
      .leftItem {
        display: flex;
        justify-content: center;
        color: #666;
        .index {
          width: 0.3rem;
        }
        .contentItem {
          margin-left: 0.4rem;
        }
        .title {
          width: 4.3rem;
          font-size: 0.2rem;
          font-weight: 900;
          color: #000;
          margin-bottom: 0.1rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .tag {
          font-size: 0.1rem;
          color: orangered;
          border: 1px solid orangered;
          border-radius: 0.1rem;
          margin: 0.08rem;
        }
      }
      .rightItem {
        width: 1.8rem;
        .icon {
          margin: 0 0.2rem;
          width: 0.4rem;
          height: 0.4rem;
        }
      }
    }
  }
}
</style>