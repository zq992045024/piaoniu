<template>
  <div id="box">
    <div class="box_1">
      <ul ref="nav">
        <div>
          <router-link
            v-for="(item,index) in list"
            :key="index"
            :to="item.path"
            tag="li" 
          >{{item.name}}</router-link>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "Navs",
  data() {
    return {
      list: [
        {
          path: "/",
          name: "全部分类"
        },
        {
          path: "/show",
          name: "演唱会"
        },
        {
          path: "/",
          name: "话剧歌剧"
        },
        {
          path: "/",
          name: "休闲展览"
        },
        {
          path: "/concert",
          name: "音乐会"
        },
        {
          path: "/tour",
          name: "旅游"
        },
        {
          path: "/tour",
          name: "旅游"
        }
      ]
    };
  },
  mounted() {
    new Bscroll(this.$refs.nav, {
      scrollX: true,
      click:true
    });
  }
};
</script>

<style>
#box {
  margin-top: 0.2rem;
  position: relative;
}
.box_1 {
  position: relative;
  z-index: 11;
  box-shadow: 0 0.1rem 0 0 #e6e6e6;
  background-color: #fcfcfc;
  width: 100%;
  overflow: auto;
}
/* .box .box_1 ul {
  white-space: nowrap;
  overflow-x: auto;
} */
.box_1 ul >div{
  display: flex;
  flex-direction: row;
  height: 0.8rem;
  width: max-content;
}
#box .box_1 ul li {
  /* visibility: visible; */
  width: 1.3rem;
  border-bottom: 1px solid #ffffff;
  color: #000;
  margin: 0 0.15rem;
  padding: 0.1rem 0;
  line-height: 0.8rem;
  font-size: 0.285rem;
}
#box .box_1 ul .router-link-exact-active{
  color: #cc3333;
}

</style>
