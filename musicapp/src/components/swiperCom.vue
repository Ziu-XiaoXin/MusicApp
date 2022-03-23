<template>
  <div id="swipercom">
    <div class="swiper-container" id="swiperIndex">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, i) in musicImg.imgs" :key="i">
          <img :src="item.pic" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.css';

import { getBanner } from '@/api/index.js'
import { reactive, onMounted } from 'vue'

export default {
  setup() {
    let musicImg = reactive({
      imgs: [
        { pic: require('../assets/img/swiper1.jpg') },
        { pic: require('../assets/img/swiper2.jpg') },
        { pic: require('../assets/img/swiper3.jpg') },
        { pic: require('../assets/img/swiper4.jpg') }
      ]
    })


    onMounted(async () => {
      const mySwiper = new Swiper('#swiperIndex', {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        }
      });

      let res = await getBanner(1)
      musicImg.imgs = res.data.banners
    });
    return { musicImg }
  }
}


/* export default {
  data: function () {
    return {
      imgs: [
        { pic: require('../assets/img/swiper1.jpg') },
        { pic: require('../assets/img/swiper2.jpg') },
        { pic: require('../assets/img/swiper3.jpg') },
        { pic: require('../assets/img/swiper4.jpg') }
      ]
    }

  },
  async mounted() {
    const mySwiper = new Swiper('#swiperIndex', {
      loop: true, // 循环模式选项
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      }
    });

    let res = await getBanner(1)
    this.imgs = res.data.banners
  }
} */

</script>

<style lang="less">
#swipercom {
  width: 7.5rem;
  #swiperIndex.swiper-container {
    width: 6.9rem;
    height: 3.2rem;
    border-radius: 0.1rem;

    .swiper-slide img {
      width: 100%;
      height: 100%;
    }
    .swiper-pagination-bullet-active {
      background-color: orangered;
    }
  }
}
</style>
