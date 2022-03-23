<template>
  <div class="searchTop">
    <div class="searchTopNav">
      <div class="back" @click="$router.go('-1')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
      </div>
      <div class="right">
        <input
          type="text"
          v-model="searchKeyWord"
          :placeholder="placeholder"
          @keydown.enter="saveKeyWord"
        />
      </div>
    </div>
    <!-- 广告 -->
    <div class="adv" v-show="showAg">
      <img src="@/assets/img/guanggao.jpg" alt="" />
      <svg class="icon close" aria-hidden="true" @click="showAg = !showAg">
        <use xlink:href="#icon-chacha"></use>
      </svg>
    </div>

    <div class="history" v-show="searchSong.length == 0">
      <div class="historyLeft">历史</div>
      <div class="historyRight">
        <div
          @click="historySearch(item)"
          class="keywordItem"
          v-for="(item, i) in keywordList"
          :key="i"
        >
          {{ item }}
        </div>
      </div>

      <!-- 清除历史记录 -->
      <div class="clear">
        <svg class="icon" aria-hidden="true" @click="clearHistory">
          <use xlink:href="#icon-shanchu"></use>
        </svg>
      </div>
    </div>

    <div class="searchSong" v-show="searchSong.length !== 0">
      <div class="searchSong-top">
        <div class="left">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang"></use>
          </svg>
          <div class="text">
            <div class="title">播放全部</div>
            <div class="num">(共{{ searchSong.length }}首)</div>
          </div>
        </div>
      </div>
      <div class="list">
        <div class="playItem" v-for="(item, i) in searchSong" :key="i">
          <div class="leftItem">
            <div class="index">{{ i + 1 }}</div>
            <div class="contentItem">
              <div class="title">{{ item.name }}</div>
              <div class="author">
                <span class="name">
                  {{ item.album.name }}
                </span>
              </div>
            </div>
          </div>
          <div class="rightItem">
            <svg class="icon" aria-hidden="true" @click="setPlay(item, i)">
              <use xlink:href="#icon-bofang2"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-gengduo-shuxiang"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SearchMusic } from '@/api/index.js'

export default {
  data() {
    return {
      placeholder: "音乐/视频/电台/用户",
      keywordList: [],
      searchKeyWord: '',
      showAg: true,
      searchSong: []
    }
  },
  beforeMount() {
    this.keywordList = localStorage.keywordList ? JSON.parse(localStorage.keywordList) : []
  },
  methods: {
    async saveKeyWord() {
      this.keywordList.push(this.searchKeyWord)

      this.keywordList = Array.from(new Set(this.keywordList))
      //大于六条历史记录删除最后一条
      if (this.keywordList.length > 6) {
        this.keywordList = this.keywordList.slice(this.keywordList.length - 6, this.keywordList.length)
      }
      localStorage.keywordList = JSON.stringify(this.keywordList)
      let result = await SearchMusic(this.searchKeyWord)
      this.searchSong = result.data.result.songs
      this.searchKeyWord = ''
      // console.log(this.searchSongs);
    },
    historySearch(keyword) {
      this.searchKeyWord = keyword
      this.saveKeyWord()
    },
    setPlay(item, i) {
      item.al = item.album
      item.al.picUrl = item.album.artist.img1v1Url
      // console.log(item);
      this.$store.commit('pushPlaylist', item)
      this.$store.commit('setPlayIndex', this.$store.state.playlist.length - 1)
    },
    clearHistory() {
      localStorage.removeItem('keywordList')
      this.keywordList = ''
    }
  }
}
</script>

<style lang="less">
.searchTop {
  width: 7.5rem;
  height: calc(100vh-1.2rem);
  padding: 0 0.4rem;
  overflow: scroll;
  .searchTopNav {
    display: flex;
    width: 100%;
    height: 1.2rem;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    padding: 0 0.4rem;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
    }
    .right {
      padding: 0 0 0 0.4rem;
      flex: 1;
      input {
        border: none;
        outline: none;
        border-bottom: 1px solid #666;
        width: 100%;
        height: 0.5rem;
      }
    }
  }
  .adv {
    display: flex;
    height: 2.5rem;
    width: 100%;
    position: relative;
    align-items: center;
    flex: 1;
    margin-top: 1.3rem;
    img {
      height: 100%;
      width: 100%;
      border-radius: 0.15rem;
      overflow: hidden;
    }
    .close {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .history {
    display: flex;

    .historyLeft {
      width: 1.2rem;
      height: 0.6rem;
      font-size: 0.35rem;
      font-weight: 900;
      margin: 0.2rem 0;
      line-height: 0.6rem;
    }
    .historyRight {
      color: #666;
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      .keywordItem {
        background-color: rgb(216, 215, 215);
        height: 0.6rem;
        padding: 0 0.2rem;
        border-radius: 0.4rem;
        line-height: 0.6rem;
        margin: 0.2rem 0.1rem;
      }
    }
    .clear {
      padding-top: 0.2rem;
      width: 0.6rem;
      height: 0.6rem;
      line-height: 0.6rem;
    }
  }
  .searchSong {
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    top: 4.5rem;
    position: fixed;
    bottom: 1.2rem;
    overflow: scroll;
    .searchSong-top {
      display: flex;
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
            font-size: 0.32rem;
            font-weight: 900;
            color: #000;
            margin-bottom: 0.1rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .author {
            width: 4.7rem;
            .name {
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
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
}
</style>