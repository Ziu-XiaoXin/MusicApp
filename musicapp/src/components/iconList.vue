<template>
  <div class="iconList">
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-ic_mianxing_baokuanxilie_1"></use>
      </svg>
      <span>热门推荐</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-ic_mianxing_huandianping_1"></use>
      </svg>
      <span>私人FM</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-ic_mianxing_jinrixianhang_1"></use>
      </svg>
      <span>排行榜</span>
    </div>
    <div class="iconItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-ic_mianxing_jifen_1"></use>
      </svg>
      <span>歌单</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.iconList {
  width: 7.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem;
  .iconItem {
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      width: 1.3rem;
      height: 1.3rem;
    }
    span {
      font-size: 0.3rem;
    }
  }
}
</style>