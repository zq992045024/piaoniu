<template>
  <div id="search">
    <div class="topbar">
      <v-touch class="backout" @tap="backHandler" tag="div">&lt;</v-touch>
      <input type="text" class="search-input" v-model="inputValue" placeholder="搜索明星、演出、场馆" />
      <div class="quxiao">取消</div>
    </div>
    <div class="findList">
      <div>
        <v-touch
          v-for="(item,index) in searchList"
          :key="index"
          class="searchList"
          @tap="toMainDetails(index)"
          tag="div"
        >
          <img :src="item.poster" alt />
          <div class="searchInfo">
            <div class="infoName">
              <span>{{item.properName}}</span>
            </div>
            <div class="infoRank">
              <span>评分</span>
              <span>{{item.rank}}</span>
            </div>
          </div>
          <div class="searchPrice">
            <span>￥</span>
            <span>{{item.lowPrice}}</span>
            <span>起</span>
          </div>
        </v-touch>
      </div>
    </div>
  </div>
</template>

<script>
import { search_api } from "api/info.js";
export default {
  data() {
    return {
      inputValue: "",
      searchList: [],
      timer: null
    };
  },
  methods: {
    backHandler() {
      this.$router.back();
    },
    toMainDetails(index) {
      var maininfo = this.searchList[index];
      console.log(maininfo);
      this.$router.push({ path: "/detail", query: maininfo });
    }
  },
  watch: {
    inputValue(newVal, ordVal) {
      clearTimeout(this.timer);
      this.timer = setTimeout(async () => {
        let data = await search_api(newVal, 15);
        this.searchList = data;
      }, 500);
    }
  }
};
</script>

<style>
.topbar {
  height: 0.8rem;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.topbar .backout {
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.7rem;
  width: 0.8rem;
  text-align: center;
}
.topbar .search-input {
  flex: 1;
  background-color: transparent;
  box-sizing: border-box;
  border: none;
  font-size: 0.3rem;
  background: #f2f2f2;
  color: #666;
  text-indent: 1rem;
  border-radius: 0.2rem;
}
.quxiao {
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.3rem;
  width: 0.8rem;
  text-align: center;
}

.searchList {
  height: 1.6rem;
  width: 7.1rem;
  padding: 0.2rem 0.2rem 0.2rem 0;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  flex-direction: row;
  margin-left: 0.3rem;
}
.searchList img {
  height: 1.16rem;
  width: 0.88rem;
}
.searchList .searchInfo {
  flex: 1;
  height: 1.2rem;
  width: 5.8rem;
  margin-left: 0.3rem;
}
.searchList .searchInfo .infoName {
  font-size: 0.3rem;
  font-weight: 700;
  color: #262626;
  margin-bottom: 0.18rem;
}
.searchList .searchPrice {
  height: 0.4rem;
  width: 1.2rem;
  margin-top: 0.4rem;
}
.searchList .infoRank span:nth-of-type(1) {
  font-size: 0.24rem;
  color: #666;
}
.searchList .infoRank span:nth-of-type(2) {
  margin-left: 0.2rem;
  font-size: 0.28rem;
  color: #ffb02e;
}
.searchList .searchPrice span:nth-of-type(1) {
  font-size: 0.2rem;
  color: #ff2661;
}
.searchList .searchPrice span:nth-of-type(2) {
  font-size: 0.36rem;
  color: #ff2661;
}
.searchList .searchPrice span:nth-of-type(3) {
  font-size: 0.22rem;
  color: #666;
}
#search{
    height: 100%;
}
.findList {
  height: 13rem;
}
.findList > div {
  height: 100%;
  overflow: auto;
}
</style>
