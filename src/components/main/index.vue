<template>
  <div id="main">
    <Banner />
    <div id="navs">
        <router-link v-for="(item,index) in navs" :key="index" :to="item.path" tag="li">
            <i class="iconfont" v-html="item.icon"></i>
            <span>{{item.text}}</span>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data(){
      return{
          navs:[
              {
                  text:"演唱会",
                  icon:"&#xe60d;",
                  path:"/show"
              },
              {
                  text:"话剧歌剧",
                  icon:"&#xe60e;",
                  path:"/show"
              },
              {
                  text:"休闲",
                  icon:"&#xe608;",
                  path:"/show"
              },
              {
                  text:"体育赛事",
                  icon:"&#xe60a;",
                  path:"/show"
              },
              {
                  text:"音乐会",
                  icon:"&#xe626;",
                  path:"/concert"
              },
              {
                  text:"儿童亲子",
                  icon:"&#xe611;",
                  path:"/tour"
              },
              {
                  text:"戏曲综艺",
                  icon:"&#xe60b;",
                  path:"/tour"
              },
              {
                  text:"芭蕾舞蹈",
                  icon:"&#xe73b;",
                  path:"/tour"
              },
              {
                  text:"旅游",
                  icon:"&#xe615;",
                  path:"/tour"
              },
              {
                  text:"更多精彩",
                  icon:"&#xe685;",
                  path:"/tour"
              }
          ]
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
#navs{
    height: 3.2rem;
    width: 80%;
  margin-left: 10%;
  display: flex;
  flex-direction: row;
  justify-content:space-around;
 flex-wrap:wrap;
 margin-top: .2rem;
}
#navs li{
    width: 20%;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    color: palevioletred
}
#navs li i{
    font-size: .65rem;
     
}

#navs li:nth-of-type(1){
    color: palevioletred
}
#navs li:nth-of-type(2){
    color: orange
}
#navs li:nth-of-type(3){
    color: plum
}
#navs li:nth-of-type(4){
    color:rgba(21, 122, 204, 0.8)
}
#navs li:nth-of-type(5){
    color: orangered
}
#navs span{
    color:#444;
    font-size: .26rem;
    margin-top: .1rem;
}

</style>
