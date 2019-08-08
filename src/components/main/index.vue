<template>
  <div id="main" ref="mains">
    <BScrollCom ref="bscroll">
      <div ref="tenH">
        <Banner />
        <div id="navs">
          <router-link v-for="(item,index) in navs" :key="index" :to="item.path" tag="li">
            <i class="iconfont" v-html="item.icon"></i>
            <span>{{item.text}}</span>
          </router-link>
        </div>
        <div class="hotActivityTitle">
          <h3>近期热门</h3>
        </div>
        <div id="hotActivity">
          <BScrollCom>
            <ul ref="lists">
              <v-touch
                v-for="(item,index) in hotList "
                :key="index"
                tag="div"
                class="hotList"
                @tap="toMainDetail(index)"
              >
                <div class="hotImg">
                  <img :src="item.recommendContent.poster" alt />
                </div>
                <div class="hotName">
                  <span>{{item.recommendContent.properName}}</span>
                </div>
                <div class="hotPrice">
                  <span style="color:#ff2661;fontSize:.24rem">￥{{item.recommendContent.lowPrice}}</span>
                  <span>起</span>
                </div>
              </v-touch>
            </ul>
          </BScrollCom>
        </div>
        <div id="hop_you_like">
          <div class="hopTitle">猜你喜欢</div>
          <ul>
            <v-touch
              class="hoplist"
              v-for="(item,index) in hotList "
              :key="index"
              tag="div"
              @tap="toMainDetail(index)"
            >
              <img :src="item.recommendContent.poster" alt />
              <div class="hopInfo">
                <div class="hopInfoTitle">
                  <span>[{{$store.state.city.cityName}}]</span>
                  <span>{{item.recommendContent.properName}}</span>
                </div>
                <div class="place">
                  <span>{{item.recommendContent.timeRange}}</span>
                  <span>|</span>
                  <span>{{item.recommendContent.venueName}}</span>
                </div>
                <div class="rank">
                  <span>评分</span>
                  <span>{{item.recommendContent.rank}}</span>
                </div>
                <div class="prices">
                  <span>{{item.recommendContent.lowPrice}}</span>
                  <span>元起</span>
                </div>
              </div>
            </v-touch>
          </ul>
        </div>
      </div>
      <v-touch class="gobackTop" @tap="goBackTop">返回顶部</v-touch>
    </BScrollCom>
  </div>
</template>

<script>
import { home_api } from "api/info.js";
import BScroll from "better-scroll";

export default {
  name: "Main",
  mounted() {
    this.$refs.bscroll.handlePullingDown(async () => {
      this.pageIndex = parseInt(Math.random() * 5 + 1);
      let data = await home_api(this.pageIndex, this.pageSize);
      let s = data.data;
      this.hotList = s;
      this.$refs.tenH.style.height = "35rem";
      sessionStorage.setItem("hotList", JSON.stringify(this.hotList));
      this.$refs.bscroll.handlefinishPullDown();
    });
    this.$refs.bscroll.handlepullingUp(async () => {
      this.$refs.tenH.style.height = "auto";
      this.pageIndex += 1;
      let data = await home_api(this.pageIndex, this.pageSize);
      let s = data.data;
      this.hotList = [...this.hotList, ...s];
      sessionStorage.setItem("hotList", JSON.stringify(this.hotList));
      this.$refs.bscroll.handlefinishPullUp();
    });
  },
  data() {
    return {
      pageIndex: 1,
      pageSize: 10,
      hotList: JSON.parse(sessionStorage.getItem("hotList")) || [],
      range: {},
      navs: [
        {
          text: "演唱会",
          icon: "&#xe60d;",
          path: "/show"
        },
        {
          text: "话剧歌剧",
          icon: "&#xe60e;",
          path: "/show"
        },
        {
          text: "休闲",
          icon: "&#xe608;",
          path: "/show"
        },
        {
          text: "体育赛事",
          icon: "&#xe60a;",
          path: "/show"
        },
        {
          text: "音乐会",
          icon: "&#xe626;",
          path: "/concert"
        },
        {
          text: "儿童亲子",
          icon: "&#xe611;",
          path: "/tour"
        },
        {
          text: "戏曲综艺",
          icon: "&#xe60b;",
          path: "/tour"
        },
        {
          text: "芭蕾舞蹈",
          icon: "&#xe73b;",
          path: "/tour"
        },
        {
          text: "旅游",
          icon: "&#xe615;",
          path: "/tour"
        },
        {
          text: "更多精彩",
          icon: "&#xe685;",
          path: "/tour"
        }
      ]
    };
  },
  async created() {
    if (!sessionStorage.getItem("hotList")) {
      let data = await home_api(this.pageIndex, this.pageSize);
      let s = data.data;
      this.hotList = s;
      sessionStorage.setItem("hotList", JSON.stringify(this.hotList));
    }
  },
  methods: {
    toMainDetail(index) {
      var maininfo = this.hotList[index].recommendContent;
      this.$router.push({ path: "/detail", query: maininfo });
    },
    goBackTop() {
      console.log(this.$refs.tenH.getBoundingClientRect());
    }
  }
};
</script>

<style>
#banner {
  height: 2rem;
  width: 80%;
  margin-left: 10%;
  background: red;
}
#navs {
  height: 3.2rem;
  width: 95%;
  margin-left: 0.2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 0.2rem;
}
#navs li {
  width: 20%;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: palevioletred;
}
#navs li i {
  font-size: 0.65rem;
}

#navs li:nth-of-type(1) {
  color: palevioletred;
}
#navs li:nth-of-type(2) {
  color: orange;
}
#navs li:nth-of-type(3) {
  color: plum;
}
#navs li:nth-of-type(4) {
  color: rgba(21, 122, 204, 0.8);
}
#navs li:nth-of-type(5) {
  color: orangered;
}
#navs span {
  color: #444;
  font-size: 0.26rem;
  margin-top: 0.1rem;
}
#main {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
#hotActivity ul {
  width: 15.3rem;
  margin-left: 0.2rem;
  display: flex;
  flex-direction: row;
  overflow: auto;
}
#hotActivity .hotList .hotImg img {
  height: 2.6rem;
  width: 2rem;
}
#hotActivity .hotList {
  margin-right: 0.2rem;
}
#hotActivity .hotName {
  width: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 0.1rem;
  margin-bottom: 0.07rem;
  color: #262626;
}
#hotActivity .hotPrice span:nth-of-type(2) {
  font-size: 0.25rem;
  transform: scale(0.8);
  transform-origin: left bottom;
  display: inline-block;
  margin-left: 2px;
  color: #999;
}
#hotActivity {
  position: relative;
  width: 100%;
  margin: 0.4rem;
}
.hotActivityTitle {
  height: 0.8rem;
  width: 100%;
  font-weight: 700;
  color: #565656;
  font-size: 0.36rem;
  float: left;
  margin-left: 0.22rem;
  line-height: 0.8rem;
}
#hop_you_like .hopTitle {
  height: 0.8rem;
  width: 100%;
  font-weight: 700;
  color: #565656;
  font-size: 0.36rem;
  float: left;
  margin-left: 0.22rem;
  margin-top: 0.3rem;
  line-height: 0.8rem;
}
#hop_you_like .hoplist {
  height: 2.5rem;
  width: 7.3rem;
  padding: 0.3rem 0.3rem;
  display: flex;
  flex-direction: row;
}
#hop_you_like .hoplist img {
  height: 2rem;
  width: 1.5rem;
}
#hop_you_like .hoplist .hopInfo {
  margin-left: 0.3rem;
  border-bottom: 1px solid hsla(0, 0%, 90%, 0.5);
}
#hop_you_like .hoplist .hopInfo .hopInfoTitle {
  font-size: 0.3rem;
  font-weight: 600;
  line-height: 0.4rem;
}
#hop_you_like .hoplist .hopInfo .place {
  font-size: 0.24rem;
  color: #999;
  margin-top: 0.1rem;
}
#hop_you_like .hoplist .hopInfo .rank {
  font-size: 0.24rem;
  color: #999;
  margin-top: 0.1rem;
  margin-bottom: 0.2rem;
}
#hop_you_like .hoplist .hopInfo .rank span:nth-of-type(2) {
  color: #ffb02e;
  font-weight: 700;
  margin-left: 0.1rem;
}
#hop_you_like .hoplist .hopInfo .prices {
  position: relative;
  top: 1px;
  color: #ff2661;
  font-size: 0.36rem;
  font-weight: 700;
  margin-right: 4px;
}
#hop_you_like .hoplist .hopInfo .prices span:nth-of-type(2) {
  font-size: 0.23rem;
  margin-left: 0.1rem;
  font-weight: normal;
  color: #999;
}
.gobackTop {
  height: 0.5rem;
  width: 0.5rem;
  background: #ff2661;
  position: fixed;
  bottom: 1rem;
  right: 0.5rem;
}
</style>
