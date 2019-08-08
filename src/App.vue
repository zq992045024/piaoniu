<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <TabBar v-if="$route.meta.tabBar"></TabBar>
    <Loding></Loding>
  </div>
</template>
<script>
import TabBar from "common/tabBar";
<<<<<<< fdf4a421fa34f85b04c9801f732c5dbac61f4d02
import Loding from "lib/loading/index.js";

import axios from "axios";

import { tick_api } from "api/info.js";

=======
import Loding from "./lib/loading/index.js";
import axios from "axios"
>>>>>>> yk
export default {
  name: "App",
  components: {
    TabBar,
    Loding
  },
  data() {
    return {
      pageIndex: 2,
      pageSize: 10
    };
  },
  created() {
   
  }
};

</script>
<style>
#app {
  height: 100%;
}
</style>
