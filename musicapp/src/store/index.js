import { createStore } from 'vuex'
import { getLyric, phoneLogin, userDetail } from '@/api/index'

export default createStore({
  state: {
    playlist: [{
      name: "初恋", id: 1873049720, al: {
        id: 132354811,
        name: "初恋",
        pic: 109951166324714670,
        picUrl: "https://p3.music.126.net/4NJvc1HOi4uv7cs4501Bjg==/109951166324714668.jpg",
        pic_str: "109951166324714668",
      }
    }],
    playCurrentIndex: 0,
    lyric: '',
    currentTime: 0,
    intervalId: 0,
    user: {
      isLogin: false,
      userinfo: "未登录",
      account: {},
      userDetails: {}
    }
  },
  getters: {
    lyricList(state) {
      let arr = state.lyric.split(/\n/gis).map((item) => {
        let min = parseInt(item.slice(1, 3));
        let sec = parseInt(item.slice(4, 6));
        let mill = parseInt(item.slice(7, 12))
        // console.log(min, sec, mill);
        // arr.push({
        //   min, sec, mill,
        //   lyric: item.slice(12, item.length - 1)
        // })

        // if (i - 1 < 0) {
        //   let pre = 0
        // } else {
        //   let pre = arr[i - 1].item.slice(4, 6)
        // }

        return {
          min, sec, mill,
          lyric: item.slice(11, item.length),
          content: item,
          time: mill + sec * 1000 + min * 60 * 1000
        }
      })

      arr.forEach((item, i) => {
        if (i == 0) {
          item.pre = 0;
        } else {
          item.pre = arr[i - 1].time
        }

      })
      // console.log(arr);
      return arr
    }
  },

  mutations: {
    setPlaylist(state, value) {
      state.playlist = value
    },

    pushPlaylist(state, value) {
      state.playlist.push(value)
    },
    setPlayIndex(state, value) {
      state.playCurrentIndex = value
    },
    setLyric(state, value) {
      state.lyric = value
    },
    setCurrentTime(state, value) {
      state.currentTime = value
    },
    setUser(state, value) {
      state.user = value
    }
  },
  actions: {
    async reqLyric(content, payload) {
      // console.log(payload.id);
      let result = await getLyric(payload.id);
      content.commit('setLyric', result.data.lrc.lyric);
      // console.log(result.data.lrc.lyric);
    },
    async phoneLogin(content, payload) {
      // console.log(payload);
      let result = await phoneLogin(payload.phone, payload.password);
      //修改登陆状态
      if (result.data.code == 200) {
        content.state.user.isLogin = true;
        content.state.user.userinfo = "已登录";
        content.state.user.account = result.data.account;


        let userDetails = await userDetail(result.data.account.id);
        content.state.user.userDetails = userDetails.data;
        localStorage.userData = JSON.stringify(content.state.user)
        // console.log(userDetails);
        content.commit('setUser', content.state.user);
      }
      // console.log(result);
      return result
    }
  },
  modules: {
  }
})
