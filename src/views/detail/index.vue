<template>
  <div id="detail">
    <HeaderCom />
    <BackCom />
    <div id="detail_main">
      <div class="header">
        <div class="pic_bg" :style="{background:'url('+info.poster+')'}"></div>
        <div class="headerTitle">
          <div class="headertop">
            <img :src="info.poster" alt />
            <div class="mainTitle">
              <h4>{{info.name}}</h4>
              <p>{{info.rank}}</p>
              <span>{{info.lowPrice}}</span>
              <span>元起</span>
            </div>
          </div>
          <div class="comment">
            <div class="like">
              <i class="iconfont">&#xe639;</i>
              <span>想看</span>
            </div>
            <div class="my_comment">
              <i class="iconfont">&#xe619;</i>
              <span>评论</span>
            </div>
          </div>
        </div>
        <div class="headerBottom">
            <div class="dates">
                <span>{{info.timeRange}}</span>
            </div>
            <div class="place">
                <span>{{info.venueName}}</span>
            </div>
            <div class="buyTick">
                <span>购票须知</span>
            </div>
            <div class="dates">
                <span>平台保障</span>
            </div>
        </div>
      </div>
    </div>
    <buyCom />
  </div>
</template>

<script>
export default {
  name:"detail",
  created() {
    this.info = this.$route.query;
  },
  data() {
    return {
      info: {}
    };
  },
  methods:{
    handleBack(){
            this.$router.back()
        }
  }
};
</script>

<style>
#detail_main .header {
  height: 8rem;
}
#detail_main .pic_bg {
  width: 100%;
  height: 4.5rem;
  margin-top: 1.8rem;
  background-size: cover;
  filter: blur(19px);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
#detail_main .header .headerTitle{
    height: 4.8rem;
}
#detail_main .header .headerTitle .headertop {
  height: 3.5rem;
  display: flex;
  flex-direction: row;
  position: relative;
  z-index: 2;
}
#detail_main .header .headerTitle img {
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  width: 2.3rem;
  height: 2.832rem;
}
#detail_main .header .headerTitle .mainTitle {
  width: 3.5rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  height: 2.8rem;
}
#detail_main .header .headerTitle .mainTitle h4 {
  font-size: 0.34rem;
  font-weight: 700;
  min-height: 0.8rem;
  line-height: 0.44rem;
  color: #fff;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.26rem;
  margin-left: 0.12rem;
}
#detail_main .header .headerTitle .mainTitle p {
  margin-bottom: 0.25rem;
  font-size: 0.3rem;
  height: 0.4rem;
  font-weight: 600;
  color: #fdb146;
  margin-left: 0.12rem;
}
#detail_main .header .headerTitle .mainTitle span {
  color: #fff;
  margin-left: 0.12rem;
}
#detail_main .header .headerTitle .mainTitle span:nth-of-type(1) {
  font-weight: 700;

  font-size: 0.4rem;
}
#detail_main .header .headerTitle .mainTitle span:nth-of-type(2) {
  font-size: 0.2rem;
  margin-left: 0.15rem;
}
#detail_main .header .headerTitle .comment {
  margin: 0.32rem 0.3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
#detail_main .header .headerTitle .comment .like,
.my_comment {
  background: rgb(0, 0, 0, 0.4);
  height: 0.6rem;
  border-radius: 0.08rem;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.28rem;
  width: 45%;
  box-sizing: border-box;
  position: relative;
  z-index: 5;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#detail_main .header .headerTitle .comment i {
  font-size: 0.3rem;
  margin-right: 0.3rem;
}
.headerBottom{
    height: 4rem;
    padding-left: .3rem;
    position: relative;
    z-index: 5;
}
.headerBottom>div{
    height: 1rem;
    border-bottom: 1px solid #f5f5f5;
    padding: .32rem 0;
    font-size: .3rem;
}
</style>
