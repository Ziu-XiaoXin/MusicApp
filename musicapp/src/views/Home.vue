<template>
  <div class="home">
    <top-nav></top-nav>
    <swiper-com></swiper-com>
    <icon-list></icon-list>
    <musicList></musicList>
  </div>
</template>

<script>

import topNav from '@/components/topNav.vue'
import swiperCom from '@/components/swiperCom.vue'
import iconList from '@/components/iconList.vue'
import musicList from '@/components/musicList.vue'


export default {
  components: {
    topNav,
    swiperCom,
    iconList,
    musicList
  }
}
</script>

<style lang="less" scoped>
.home {
  position: fixed;
  z-index: -1;
}
</style>
