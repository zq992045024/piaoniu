<template>
  <div class="city_body" ref="scroll">
    <BScrollCom ref="scrolls"> 
      <div>
        <!--热门城市-->
        <div class="hot_city">
          <div class="hot_title">热门城市</div>
          <div class="hot_city_list">
            <div
              class="hot_city_name"
              v-for="(item,index) in cityHot"
              :key="index"
            >{{item.cityName}}</div>
          </div>
        </div>
        <!--城市列表-->
        <div class="city_list" ref="list">
          <div class="city_list_item" v-for="(item,index) in cityList" :key="index">
            <div class="city_title_letter">{{item.index}}</div>
            <div class="city_list_name">
              <div
                class="city_list_name_item"
                v-for="(child,idx) in item.list"
                :key="idx"
              >{{child.cityName}}</div>
            </div>
          </div>
        </div>
      </div>
    </BScrollCom>
    <!--城市列表下标-->
    <div class="city_list_index">
      <v-touch
        class="index_item"
        v-for="(item,index) in cityList"
        :key="index"
        @tap="handleIndexTo(index)"
        tag="div"
      >{{item.index}}</v-touch>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "CityList",
  created() {
    if (
      !sessionStorage.getItem("cityHot") ||
      !sessionStorage.getItem("cityList")
    ) {
      this.handleGetCityAction();
    }
  },
  computed: {
    ...mapState({
      cityHot: state => state.city.cityHot,
      cityList: state => state.city.cityList
    })
  },
  methods: {
    ...mapActions({
      handleGetCityAction: "city/handleGetCityAction"
    }),
    handleIndexTo(index) {
     // let allList = this.$refs.list.getElementsByClassName("city_list_item");
     // this.$refs.scroll.scrollTop = allList[index].offsetTop;
     let letterFirsts = this.$refs.list.querySelectorAll(".city_title_letter");
      this.$refs.scrolls.scroll.scrollTo(0,-letterFirsts[index].offsetTop,500)
    }
  },
  mounted(){
    this.$refs.scrolls.handlePullingDown(()=>{
      console.log(11)
    })
  }
  // beforeRouteEnter(to,from,next){
  //   console.log(from)
  // }
};
</script>

<style>
.city_body {
  background: #ebebeb;
  height: 100%;
  overflow: auto;
}
/*热门城市*/
.hot_title,
.city_title_letter {
  line-height: 0.6rem;
  padding-left: 0.26rem;
  font-size: 0.28rem;
}

.hot_city_list,
.city_list_name {
  width: 96%;
  background: #f5f5f5;
  padding-bottom: 0.16rem;
  padding-right: 0.6rem;
  display: flex;
  flex-wrap: wrap;
}
.hot_city_name {
  margin-top: 0.3rem;
  margin-left: 0.26rem;
  width: 1.9rem;
  height: 0.66rem;
  background: #fff;
  text-align: center;
  line-height: 0.66rem;
  font-size: 0.28rem;
  border: 2px solid #e6e6e6;
}

.city_list > div {
  width: 100%;
}
.city_list_name_item {
  line-height: 0.9rem;
  margin-left: 0.26rem;
  width: 100%;
  border-bottom: 2px solid #e6e6e6;
  font-size: 0.28rem;
}

/*城市列表下标*/
.city_list_index {
  position: fixed;
  right: 0;
  top: 1rem;
}
.city_list_index > div {
  padding: 0.1rem 0.05rem;
  font-size: 0.25rem;
}
</style>