<template>
  <div id="app">
    <router-view></router-view>
    <TabBar v-if="$route.meta.tabBar"></TabBar>
    <Loding></Loding>
  </div>
</template>

<script>
import TabBar from "common/tabBar";
import Loding from "./lib/loading/index.js";

import axios from "axios"
export default {
    name:"App",
    components:{
      TabBar,
      Loding,
     
    },
  created() {

 },
}
</script>


<style>
  #app{
    height: 100%;
  }
</style>
