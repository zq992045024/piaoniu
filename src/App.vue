<template>
  <div id="app">
    <TabBar/>
    <router-view/>
  </div>
</template>
<script>
import Modern from './views/Modern/index'
import Movie from './views/movie/index.vue'
import TabBar from  './common/TabBar/index.vue'
import List from './views/List/index.vue'
import Vocal from './views/Vocal/index.vue'
export default {
    name:'App',
    components:{
      Vocal,
      TabBar,
      List,
      Movie,
      Modern,

    },

  // created() {
  //     http("get","api/v3/activities?pageIndex=1&categoryId=2")
  //             .then((data)=>{
  //               console.log(data)
  //             })
  // }
}
</script>
<style lang="scss">

</style>
