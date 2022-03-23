<template>
  <div class="listViewTop">
    <img class="bg" :src="playlist.coverImgUrl" />
    <div class="listViewTopNav">
      <div class="back" @click="$router.go('-1')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <div class="title">歌单</div>
      </div>
      <div class="right">
        <svg class="icon search" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo-shuxiang"></use>
        </svg>
      </div>
    </div>
    <div class="content">
      <div class="contentLeft">
        <img :src="playlist.coverImgUrl" />
        <div class="palyCount">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-yunhang"></use>
          </svg>
          <span>{{ changeValue(playlist.playCount) }}</span>
        </div>
      </div>
      <div class="contentRight">
        <h3>{{ playlist.name }}</h3>
        <div class="author">
          <img :src="playlist.creator.avatarUrl" class="header" />
          <span>{{ playlist.creator.nickname }}</span>
        </div>
        <div class="description">{{ playlist.description }}</div>
      </div>
    </div>
    <div class="iconList">
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liaotian"></use>
        </svg>
        <span>{{ playlist.commentCount }}</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fenxiang"></use>
        </svg>
        <span>{{ playlist.shareCount }}</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yunduanxiazai"></use>
        </svg>
        <span>下载</span>
      </div>
      <div class="iconItem">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-icon_duoxuankuangzu"></use>
        </svg>
        <span>多选</span>
      </div>
    </div>
  </div>
</template>

<script>
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
      }
      return hotRes
    };
    return {
      changeValue
    }
  }
}
</script>

<style lang="less">
.listViewTop {
  width: 7.5rem;
  padding: 0 0.4rem;

  .bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 7.5rem;
    height: auto;
    z-index: -1;
    filter: blur(20px);
  }
  .listViewTopNav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.2rem;
    font-size: 0.4rem;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      fill: #fff;
    }
    .title {
      margin-left: 0.35rem;
    }
    .search {
      margin-right: 0.5rem;
    }
  }
  .back,
  .right {
    display: flex;
    color: #fff;
  }
  .content {
    display: flex;
    justify-content: space-between;
    padding: 0.6rem 0;
    .contentLeft {
      position: relative;
      img {
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 0.1rem;
      }
      .palyCount {
        position: absolute;
        right: 0.1rem;
        top: 0.1rem;
        font-size: 0.24rem;
        color: rgb(231, 231, 231);
        display: flex;
        align-items: center;
        font-weight: 900;
        .icon {
          height: 0.4rem;
          width: 0.4rem;
          fill: rgb(231, 231, 231);
        }
      }
    }
    .contentRight {
      width: 3.5rem;
      h3 {
        color: #fff;
        align-items: center;
        margin: 0.2rem 0;
      }
      .author {
        display: flex;
        align-items: center;
        img.header {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 0.3rem;
          margin-right: 0.2rem;
        }
        span {
          color: rgb(223, 221, 221);
          font-size: 0.26rem;
        }
      }
      .description {
        font-size: 0.1rem;
        color: rgba(0, 0, 0, 0.507);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-top: 0.1rem;
      }
    }
  }
  .iconList {
    display: flex;
    justify-content: space-around;
    .iconItem {
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon {
        width: 0.6rem;
        height: 0.6rem;
        fill: #fff;
      }
      span {
        font-size: 0.25rem;
        padding-top: 0.2rem;
        color: #fff;
      }
    }
  }
}
</style>