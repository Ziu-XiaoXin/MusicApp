<template>
  <div class="listView">
    <listview-top :playlist="state.playlist"></listview-top>
    <play-list :playlist="state.playlist"></play-list>
  </div>
</template>

<script>
import listviewTop from '@/components/listviewTop.vue'
import playList from '@/components/playList.vue'

import { getPlaylistDetail } from '@/api/index';

import { reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router'

import store from '@/store/index.js'
export default {

  components: { listviewTop, playList },
  setup() {
    const route = useRoute()
    let state = reactive({
      list: [],
      playlist: {
        creator: {},
        tracks: []
      }
    })
    onMounted(async () => {
      //   console.log(route);
      let id = route.query.id
      let result = await getPlaylistDetail(id);
      state.playlist = result.data.playlist;
      store.commit('setPlaylist', state.playlist.tracks)
      // console.log(result);
    })
    return {
      state
    }
  }
}
</script>

<style lang="less" scoped>
</style>